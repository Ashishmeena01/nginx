# Nginx Load Balancing Lab

A small Docker Compose demo with an Nginx reverse proxy and five Node.js backend instances.

## Run it

Start the stack with Docker Compose:

```sh
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080) and select **Call a backend**. Repeated calls show which backend answered. The API is available at `/api/`, and backend health checks are exposed through `/api/healthz`.

Stop the stack with `Ctrl+C`, or run `docker compose down` in another terminal.

## Services

- `nginx` serves the static page and distributes `/api/` requests.
- `backend1` through `backend5` each run the same Node.js server with a distinct `SERVER_ID`.
- Each backend listens on port 3000 and responds to `/healthz` for its container health check.
