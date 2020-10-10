# RAGE Multiplayer Cops 'n' Robbers script
> A work-in-progress script for RAGE Multiplayer, using Typescript, Vue.js and MySQL.

###### There's no database support at the moment so *technically* MySQL isn't required to run it, but it will be coming!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)

---

## Prerequisites

- Node.js
- MySQL
- Latest RAGE Multiplayer `updater.exe`
- Latest RAGE Multiplayer client

---

## Installation

### Creating dev environment

- Create a directory which contains `updater.exe`
- Create a subdirectory of this called `server-files`
- Clone the repository into `server-files`
- Run `npm i` from the `server-files` directory

### After cloning the repository

When running the server for the first time it is necessary to run `updater.exe` and allow it to download the files required to run the server.

After doing this you should also replace the contents of `conf.json` (in `server-files`) with those found in `conf.json.example`

### Running the server

- Run `npm run build` from `server-files` directory
- Run `ragemp-server.exe` and direct connect to `127.0.0.1:22005` from the RAGE Multiplayer client (don't forget to change the port number if you changed the value in `conf.json`)

### Developing

- Edit files found in `src/...` and not the files found in `client_packages` or `packages`!
- `package.json` includes scripts for watching cef, client and server