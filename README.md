# Repository of Algojkl.com

[Algo ry](https://algojkl.com)

## Project overview

This repository contains the Algo ry website:

- `algojkl-frontend/` — React and Vite frontend.
- `algojkl-backend/` — Express API. MongoDB is provided separately and is not
  included in the Docker setup.
- `compose.yaml` — runs the frontend and backend as separate containers.

## Local development

Use Node.js 22 or later. Install and start each service in a separate terminal:

```sh
cd algojkl-backend
npm ci
npm start
```

```sh
cd algojkl-frontend
npm ci
npm run dev
```

The backend needs `MONGO_URI` and `SECRET_PASSWORD` in
`algojkl-backend/.env`. The frontend needs the Vite settings described below.
The Vite development server does not proxy the login request; use Docker
Compose to test the frontend and login API together.

Useful frontend checks:

```sh
cd algojkl-frontend
npm run lint
npm run build
```

## Docker

Install Docker Engine and **Docker Compose V2** (`docker compose`). The legacy
`docker-compose` V1 is not supported.

Create the environment files from the examples and modify the secrets:

```sh
cp algojkl-backend/.env.example algojkl-backend/.env
cp algojkl-frontend/.env.example algojkl-frontend/.env
```

From the repository root, build and start both containers:

```sh
docker compose --env-file algojkl-frontend/.env up --build -d
```

Open <http://localhost:8080>. The frontend container serves the website and
proxies `/login` requests to the backend. The backend port is not published
directly. The frontend is bound to the host's loopback interface, so a server
Nginx can proxy to `http://127.0.0.1:8080` without exposing the container port
to the public internet.

Common operations (run from the repository root):

```sh
docker compose --env-file algojkl-frontend/.env ps
docker compose --env-file algojkl-frontend/.env logs -f
docker compose --env-file algojkl-frontend/.env up --build -d
docker compose --env-file algojkl-frontend/.env down
```

```sh
git pull --ff-only
docker compose --env-file algojkl-frontend/.env up --build -d
```

The frontend environment is compiled into the image, so rebuild it after
changing frontend values. Recreate the backend after changing backend values.
Do not commit real `.env` files or credentials.

## FAQ

### How do I can contribute

Ask help from quild's webmaster. Webmaster will help you start your commit journey.

### I spotted an error, Can I report it?

Yes, make a new issue detailing the problem in issues site.

### How do I submit changes I want to contribute

Make a pull request with your changes and tag algojkl in pr reviewer, so we can get changes online.
