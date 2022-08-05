# EtchaSketch

## Getting Started

This project is structured as a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Rush](https://rushjs.io). To quickly get started:

- Install the `rush` CLI utility
- Clone the repo
- Install dependencies
- Run: `rush start` (this will simulataneously run the API server / React's WebPack build in watch mode and run DB migrations / seeds)

Once you've done this, the application should be accessible at: http://localhost:9010

```bash title="Cloning the repository, installing dependencies, and launching the service"
npm i -g @microsoft/rush@5.75.0 && \
    git clone git@github.com:tkambler/etchasketch.git && \
    cd etchasketch && \
    rush install && \
    rush start
```

## Reviewing the Code

You are strongly encouraged to use VSCode. When doing so, open the project via the VSCode _workspace_ file (`Workspace.code-workspace`) located at the root of the project.

## How the API Starts

If you're looking for the entrypoint into the API, see: `Application/scripts/start.ts`

## How the Frontend Starts

If you're looking for the entrypoint into the React layer, see: `Frontend/src/index.tsx`

## Services / Dependency Injection

This project takes advantage of the monorepo approach by creating distinct projects / packages that are responsible for managing major portions of the API. The services are managed with [typedi](https://docs.typestack.community/typedi/) - a dependency-injection library for Node. The following service layers exist:

- AppService - Small service that represents the application as a whole. Provides a convenient layer for starting / stopping the entire application.
- ConfigService - Manages runtime config.
    - Utilizes [confit](https://github.com/krakenjs/confit) and [shortstop-handlers](https://github.com/krakenjs/shortstop-handlers). Provides a very clean mechanism for driving Express middleware setup via config.
- APIService - Exposes an Express application that powers the API.
    - Each individual request handler is defined as a service class. As a result, it becomes very easy to create handlers that take advantage of some of the niceties that come along with using typedi (e.g. easy access to other services via `Inject` decorator).
- KnexService - Exposes a DB query builder.
    - Uses [knex](https://knexjs.org/)
        - Currently uses SQLite, but adapters exist for various popular DBs (e.g. PostgreSQL, MySQL, MSSQL, etc...).
- LogService - Service for logging useful runtime info to the console (or elsewhere, if so desired)
    - Uses [pino](https://github.com/pinojs/pino)
- UserService - Exposes methods for creating users, fetching user data, etc...
- WhiteboardService - Exposes methods for creating whiteboards, fetching whiteboard data, etc...

## Feature Completeness

The following features have been enabled:

- User registration / sign in
- The ability to create whiteboards
    - No special libraries were used (as requested)
    - A pen tool
    - An eraser tool
    - The ability to choose from five different stroke colors
    - The ability to choose from five different stroke sizes
    - Retina displays are accounted for
    - The ability to persist a whiteboard (currently saved via SQLite)
    - Creation date / time and total drawing time are recorded
    - Whiteboards are stored as PNGs *and* SVGs, and the underlying data that originally went into the canvas is saved as well (in order to allow for playback)
- A shared view from which you can view all whiteboards (and delete your own)
- The ability to view specific whiteboards
    - The ability to replay the creation process (i.e. watch the whiteboard being created)

The following features have *not* been enabled:

- The ability to flag a whiteboard as being either public or private
- The ability to share a whiteboard publicly
- Stroke smoothing. This should be relatively straightforward to implement. Doing so would likely involve writing to the canvas using a bezier curve algorith (as opposed to the simple lines / strokes that are currently used).

## React Notes

- Simple state management approaches were used as opposed to elaborate state management tools (e.g. Redux, sagas, etc...).
    - React's built-in `useReducer` method was extended with thunk support via `@0y0/use-reducer-x`.
- All of the important bootstrapping steps that typically take place as part of launching a React app have been abstracted behind a simple `Setup` component.
    - This is where initial session data is fetched, default styles are applied, etc...
- Toast notifications are displayed via [notistack](https://github.com/iamhosseindhv/notistack)
- UI was implemented with [MUI components](https://mui.com/)
