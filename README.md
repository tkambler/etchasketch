# EtchaSketch

## Getting Started

This project is structured as a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Rush](https://rushjs.io). To quickly get started:

- Install the `rush` CLI utility
- Clone the repo
- Install dependencies
- Run: `rush start` (this will simulataneously run the API server and React's WebPack build in watch mode)

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

This project takes advantage of the monorepo approach by creating distinct projects / packages that are responsible for managing major portions of the API. The following service layers exist:

- AppService - Represents the application as a whole. Provides a convenient layer for starting / stopping the entire application.
- ConfigService - Manages runtime config.
- APIService - Exposes an Express application that powers the API.
- KnexService - Exposes a DB query builder. Currently uses SQLite.
- LogService - Service for logging useful runtime info to the console.
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
- The ability to view whiteboards
    - The ability to replace the creation process as a movie

The following features have *not* been enabled:

- The ability to flag a whiteboard as being either public or private
- The ability to share a whiteboard publicly

**Of Note:** Smoothing out the drawings should be rather straightforward, but was not done. Doing so would likely involve writing to the canvas using a bezier curve algorith.

## React Notes

- Simple state management approaches were used as opposed to elaborate state management tools (e.g. Redux, sagas, etc...).
    - React's built-in `useReducer` method was extended with thunk support via `@0y0/use-reducer-x`.
