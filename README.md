# ping-api

Minimal HTTP API in TypeScript (zero external runtime dependencies) that returns request headers as JSON on `GET /ping`.

## Endpoints

| Method | Path   | Response                        |
|--------|--------|---------------------------------|
| GET    | /ping  | `200` — request headers as JSON |
| *      | *      | `404` — empty body              |

## Requirements

- Node.js >= 20
- npm >= 9

## Installation

```bash
git clone <repo-url>
cd ping-api
npm install
```

## Running

### Development (ts-node)

```bash
npm run dev
# or with a custom port:
PING_LISTEN_PORT=8080 npm run dev
```

### Production (compiled)

```bash
npm run build
npm start
# or with a custom port:
PING_LISTEN_PORT=8080 npm start
```

### Default port

If `PING_LISTEN_PORT` is not set, the server listens on port **3000**.

## Docker

### Build

```bash
docker build -t ping-api .
```

### Run

```bash
# Default port 3000
docker run -p 3000:3000 ping-api

# Custom port
docker run -e PING_LISTEN_PORT=8080 -p 8080:8080 ping-api
```

## Testing

```bash
curl http://localhost:3000/ping
# → {"host":"localhost:3000","user-agent":"curl/8.x",...}

curl -I http://localhost:3000/other
# → HTTP/1.1 404
```

