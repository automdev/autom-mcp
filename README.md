# Autom MCP Server

Official [Model Context Protocol](https://modelcontextprotocol.io) server for the [Autom](https://www.autom.dev) SERP API.

Google, Bing and Brave search results as structured JSON — web, maps, news, shopping, images, jobs and AI Mode.

It lets Claude, Cursor, VS Code, Windsurf and any MCP client call the API as tools. Runs over **stdio** (local) or **Streamable HTTP** (self-hosted).

## Requirements

- Node.js 20 or newer
- a Autom API key — [sign up](https://app.autom.dev/register), then copy it from the [dashboard](https://app.autom.dev)

## Hosted server (recommended)

Autom runs this server for you at **`https://mcp.autom.dev/`** (Streamable HTTP). Send your API key in the `x-api-key` header; nothing to install.

```sh
claude mcp add --transport http autom https://mcp.autom.dev/ --header "x-api-key: YOUR_API_KEY"
```

```json
{
  "mcpServers": {
    "autom": {
      "url": "https://mcp.autom.dev/",
      "headers": {
        "x-api-key": "YOUR_API_KEY"
      }
    }
  }
}
```

The hosted server and this package expose the same API; run the package locally when you want stdio, your own network egress, or to self-host it.

## Run it locally

### Claude Code

```sh
claude mcp add autom --env AUTOM_API_KEY=YOUR_API_KEY -- npx -y @autom/mcp
```

### Claude Desktop, Cursor, Windsurf and other clients

Add the server to the client's MCP configuration (`claude_desktop_config.json`, `.cursor/mcp.json`…):

```json
{
  "mcpServers": {
    "autom": {
      "command": "npx",
      "args": ["-y", "@autom/mcp"],
      "env": {
        "AUTOM_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

### VS Code

```json
{
  "servers": {
    "autom": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@autom/mcp"],
      "env": {
        "AUTOM_API_KEY": "${input:autom-api-key}"
      }
    }
  },
  "inputs": [
    {
      "type": "promptString",
      "id": "autom-api-key",
      "description": "Autom API key",
      "password": true
    }
  ]
}
```

### Claude Desktop extension

Download the `.mcpb` bundle from the releases page and open it; Claude Desktop asks for your API key.

### Docker

```sh
docker build -t autom-mcp .
docker run -i --rm -e AUTOM_API_KEY=YOUR_API_KEY autom-mcp
```

## Tools

| Tool                         | Description                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bing_search`                | Query Bing Search via API and retrieve structured organic results (title, link, snippet, position).                                                                                                      |
| `brave_images`               | Search Brave Images via API and retrieve structured image results with pagination and SafeSearch.                                                                                                        |
| `brave_search`               | Search Brave Search via API and retrieve structured organic results with pagination.                                                                                                                     |
| `brave_videos`               | Search Brave Videos via API and retrieve structured video results with pagination and SafeSearch.                                                                                                        |
| `duckduckgo_search`          | Query DuckDuckGo via API and retrieve structured organic results with region and language.                                                                                                               |
| `finder_google_countries`    | Search Google countries and retrieve country codes (free Finder endpoint).                                                                                                                               |
| `finder_google_languages`    | Search Google languages and retrieve language codes (free Finder endpoint).                                                                                                                              |
| `finder_google_locations`    | Find supported Google locations and retrieve location IDs and country codes (free endpoint).                                                                                                             |
| `google_images`              | Search Google Images via API and retrieve image results (URLs, titles, sources, dimensions).                                                                                                             |
| `google_jobs`                | Scrape Google Jobs results via API and retrieve structured job listings with title, company, location, and pagination.                                                                                   |
| `google_maps`                | Search Google Maps via API and retrieve structured place results (address, website, phone).                                                                                                              |
| `google_news`                | Search Google News via API and retrieve structured news results with pagination.                                                                                                                         |
| `google_search`              | Scrape Google Search results via API and retrieve structured SERP data with pagination.                                                                                                                  |
| `google_search_ai`           | Query Google AI Mode via API. JSON with text_blocks, references, and shopping_results.                                                                                                                   |
| `google_search_autocomplete` | Get Google Search autocomplete suggestions via API for a given query.                                                                                                                                    |
| `google_search_light`        | Scrape lightweight Google Search results via API: fast, cost-efficient, organic results only.                                                                                                            |
| `google_shopping`            | Scrape Google Shopping results via API and retrieve structured product listings with prices, ratings, and merchant data.                                                                                 |
| `google_videos`              | Search Google Videos via API and retrieve structured video results with metadata.                                                                                                                        |
| `search`                     | One call walks engines in order and returns the first organic results. engines=auto tries Google, then Brave, Bing, DuckDuckGo, Yahoo, and Baidu. Omitted gl is us and omitted hl is en. There is no pa… |
| `stats`                      | Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.                            |
| `usage`                      | Retrieve real-time usage statistics and credit balance for your Autom account.                                                                                                                           |
| `yahoo_search`               | Query Yahoo via API and retrieve structured organic results with country and language.                                                                                                                   |

Every tool that calls the API consumes credits. JSON results are returned as text; images are returned inline and other files (PDF…) as embedded resources, up to 4 MB.

## Streamable HTTP

```sh
npx @autom/mcp --http --port 3000
```

The endpoint is `POST /mcp` (stateless, JSON responses). Each client sends its own key in the `x-api-key` header (or `Authorization: Bearer <key>`); the server never uses a key of its own. It binds to `127.0.0.1` by default and rejects browser origins unless you allow them — put it behind TLS before exposing it.

`createHttpHandler()` is exported for Fetch-compatible runtimes (Cloudflare Workers, Deno, Bun):

```ts
import { createHttpHandler } from "@autom/mcp";

export default { fetch: createHttpHandler({ allowedOrigins: [] }) };
```

## Security

- The API key is read from `AUTOM_API_KEY` (stdio) or the request headers (HTTP) and removed from error messages.
- Content fetched from websites is untrusted: the server instructions tell the model to treat it as data, not instructions.
- See [SECURITY.md](SECURITY.md) to report a vulnerability.

## Development

```sh
npm install
npm test
npm run build
npx @modelcontextprotocol/inspector node dist/stdio.js
```

## Built on the SDK

The server uses the official [Node.js SDK](https://github.com/automdev/autom-node) (`@autom/sdk`).

## License

MIT — see [LICENSE](LICENSE).
