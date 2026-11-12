# Repository of Algojkl.com
[Algo ry](https://algojkl.com)

## Running with Docker

Install Docker Engine and Docker Compose, and make sure Docker is running. The
frontend and backend are built as separate images. MongoDB is not included;
provide a MongoDB instance that the backend can reach.

1. Copy `algojkl-backend/.env.example` to `algojkl-backend/.env` and set
   `MONGO_URI` and `SECRET_PASSWORD`. If MongoDB runs on the Docker host,
   use `host.docker.internal` instead of `localhost` in its URI. The database
   must contain the existing `Salaisuudet` collection for the secrets page.
2. Copy `algojkl-frontend/.env.example` to `algojkl-frontend/.env` and set the
   Contentful space ID, content delivery token and calendar embed URL.
3. From the repository root, run:

   ```sh
   docker compose --env-file algojkl-frontend/.env up --build -d
   ```

Open <http://localhost:8080>. Set `FRONTEND_PORT` in the frontend `.env` file
to use another host port. The frontend server proxies `/login` to the backend;
the backend is not published directly to the host.

Frontend `VITE_` values are embedded in the browser bundle at build time and
are public: use a Contentful delivery token, never a management token or other
secret. Rebuild the frontend after changing these values. Backend environment
variables are read at container startup; recreate the containers after changing
them:

```sh
docker compose --env-file algojkl-frontend/.env up --build -d
docker compose --env-file algojkl-frontend/.env logs -f
docker compose --env-file algojkl-frontend/.env down
```

The backend's event archival script also needs its Contentful management
credentials when run separately; do not put those credentials in the frontend.

## FAQ

### How do I can contribute
Ask help from quild's webmaster. Webmaster will help you start your commit journey.

### I spotted an error, Can I report it?
Yes, make a new issue detailing the problem in issues site.

### How do I submit changes I want to contribute
Make a pull request with your changes and tag algojkl in pr reviewer, so we can get changes online.
