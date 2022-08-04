# EtchaSketch

## Getting Started

This project is structured as a [monorepo](https://en.wikipedia.org/wiki/Monorepo) that is managed with [Rush](https://rushjs.io).

```bash title="Cloning the repository, installing dependencies, and launching the service"
git clone git@github.com:tkambler/etchasketch.git && \
    cd etchasketch && \
    node ./common/scripts/install-run-rush.js install && \
    rush start
```

## Rush Commands

The `rush` utility exposes a variety of [built-in](https://rushjs.io/pages/developer/everyday_commands/) commands, along with some that we have [implemented ourselves](https://rushjs.io/pages/maintainer/custom_commands/)[^1]. Some of the most important commands are highlighted below.

```bash title="Some important Rush commands"
# Install dependencies
rush install

# Start the local development server, available at: http://localhost:8040
rush start
```
