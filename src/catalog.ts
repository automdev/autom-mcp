// Generated from the Autom OpenAPI document. Do not edit by hand.

import type { EndpointEntry } from "./types.js";

export const MODE: "catalog" | "tools" = "tools";

export const CATALOG: readonly EndpointEntry[] = [
  {
    name: "bing_search",
    title: "Bing Search",
    path: "/v1/bing/search",
    methods: ["GET", "POST"],
    description:
      "Bing Search. Query Bing Search via API and retrieve structured organic results (title, link, snippet, position). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The search query you want to run on Bing.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description:
          "Number of results per page (e.g. 10, 20, 50). This value is a suggestion.",
        default: 10,
      },
      {
        name: "location",
        type: "string",
        required: false,
        description: "Search origin location (e.g. city).",
      },
      {
        name: "lat",
        type: "number",
        required: false,
        description: "GPS latitude for the search origin.",
      },
      {
        name: "lon",
        type: "number",
        required: false,
        description: "GPS longitude for the search origin.",
      },
      {
        name: "mkt",
        type: "string",
        required: false,
        description:
          "Market code where results come from (e.g. en-US). Cannot be used together with cc.",
      },
      {
        name: "cc",
        type: "string",
        required: false,
        description:
          "Country code to search from (2-letter ISO 3166-1). Cannot be used together with mkt.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "brave_images",
    title: "Brave Images",
    path: "/v1/brave/images",
    methods: ["GET", "POST"],
    description:
      "Brave Images. Search Brave Images via API and retrieve structured image results with pagination and SafeSearch. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The search query you want to run on Brave Images.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (50 results per page).",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code (e.g. fr, us). Mapped to Brave country.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code (e.g. fr, en). Mapped to Brave lang.",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "SafeSearch: active | off | moderate | strict. Google-style active maps to Brave strict.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "brave_search",
    title: "Brave Search",
    path: "/v1/brave/search",
    methods: ["GET", "POST"],
    description:
      "Brave Search. Search Brave Search via API and retrieve structured organic results with pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The search query you want to run on Brave Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de.",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "brave_videos",
    title: "Brave Videos",
    path: "/v1/brave/videos",
    methods: ["GET", "POST"],
    description:
      "Brave Videos. Search Brave Videos via API and retrieve structured video results with pagination and SafeSearch. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The search query you want to run on Brave Videos.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code (e.g. fr, us). Mapped to Brave country.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code (e.g. fr, en). Mapped to Brave lang.",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "SafeSearch: active | off | moderate | strict. Google-style active maps to Brave strict.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "duckduckgo_search",
    title: "DuckDuckGo Search",
    path: "/v1/duckduckgo/search",
    methods: ["GET", "POST"],
    description:
      "DuckDuckGo Search. Query DuckDuckGo via API and retrieve structured organic results with region and language. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to DuckDuckGo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_countries",
    title: "Google Countries",
    path: "/v1/finder/google-countries",
    methods: ["GET"],
    description:
      "Google Countries. Search Google countries and retrieve country codes (free Finder endpoint).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filter countries by a search string (case-insensitive). Returns all countries whose code or name matches the specified query.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_languages",
    title: "Google Languages",
    path: "/v1/finder/google-languages",
    methods: ["GET"],
    description:
      "Google Languages. Search Google languages and retrieve language codes (free Finder endpoint).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filter languages by a search string (case-insensitive). Returns all languages whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_locations",
    title: "Google Locations",
    path: "/v1/finder/google-locations",
    methods: ["GET"],
    description:
      "Google Locations. Find supported Google locations and retrieve location IDs and country codes (free endpoint).",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search locations supported by Piloterr (cities, countries, etc.) by providing a query string. Returns matching locations ordered by reach.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_images",
    title: "Google Images",
    path: "/v1/google/images",
    methods: ["GET", "POST"],
    description:
      "Google Images. Search Google Images via API and retrieve image results (URLs, titles, sources, dimensions). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          'Query you want to search on Google Images (e.g. "lion", "nike logo", "modern house exterior").',
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "async",
        type: "boolean",
        required: false,
        description:
          "If true, returns a job and lets you fetch results asynchronously.",
        default: false,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_jobs",
    title: "Google Jobs",
    path: "/v1/google/jobs",
    methods: ["GET", "POST"],
    description:
      "Google Jobs. Scrape Google Jobs results via API and retrieve structured job listings with title, company, location, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The job search query to run on Google Jobs (e.g. developer, barista new york).",
      },
      {
        name: "uds",
        type: "string",
        required: false,
        description:
          "Advanced search filters string for Google Jobs (encoded filter chips).",
      },
      {
        name: "lrad",
        type: "number",
        required: false,
        description:
          "Search radius in kilometers. Does not strictly limit the radius, but influences result proximity.",
      },
      {
        name: "ltype",
        type: "number",
        required: false,
        description:
          "Filter results by work type. Set to 1 to filter for work from home / remote jobs.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Human-readable location to originate the search from (e.g. New York, NY, Paris, France). If several locations match, the most popular one is used. Note: location and uule cannot be used together.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google encoded location parameter. Use for precise geo targeting. Note: uule and location cannot be used together.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "next_page_token",
        type: "string",
        required: false,
        description:
          "Token to fetch the next page of results. Returned in the serpapi_pagination.next_page_token field of the previous response.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_maps",
    title: "Google Maps",
    path: "/v1/google/maps",
    methods: ["GET", "POST"],
    description:
      "Google Maps. Search Google Maps via API and retrieve structured place results (address, website, phone). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search query for Google Maps (e.g. business type, brand, or place name).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "ll",
        type: "string",
        required: false,
        description:
          "Map center / geo hint in Google format (e.g. @43.5131985,1.4600501,60m). Helps focus results around a coordinate and zoom radius.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_news",
    title: "Google News",
    path: "/v1/google/news",
    methods: ["GET", "POST"],
    description:
      "Google News. Search Google News via API and retrieve structured news results with pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Query to search on Google News (keywords, company, topic).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of results per page (e.g. 10).",
        default: 10,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search",
    title: "Google Search",
    path: "/v1/google/search",
    methods: ["GET", "POST"],
    description:
      "Google Search. Scrape Google Search results via API and retrieve structured SERP data with pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query you want to run on Google (supports advanced operators like site:, inurl:, intitle:).",
      },
      {
        name: "tbs",
        type: "string",
        required: false,
        description:
          "Advanced search filters string (e.g. time ranges: qdr:h last hour, qdr:d last day, qdr:w last week, qdr:m last month, qdr:y last year).",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Human-readable location to originate the search from (e.g. New York, NY, Paris, France). If several locations match, the most popular one is used. Note: location and uule cannot be used together.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google encoded location parameter. Use for precise geo targeting. Note: uule and location cannot be used together.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number / offset used for pagination.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return per page (deprecated).",
        default: 10,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search_ai",
    title: "Google AI Mode",
    path: "/v1/google/search/ai",
    methods: ["GET", "POST"],
    description:
      "Google AI Mode. Query Google AI Mode via API. JSON with text_blocks, references, and shopping_results. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The question or search query you want Google AI Mode to answer (supports advanced operators like site:, inurl:, intitle:).",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Human-readable location to originate the search from (e.g. New York, NY, Paris, France). If several locations match, the most popular one is used. Note: location and uule cannot be used together.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google encoded location parameter. Use for precise geo targeting. Note: uule and location cannot be used together.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search_autocomplete",
    title: "Google Search Autocomplete",
    path: "/v1/google/search/autocomplete",
    methods: ["GET", "POST"],
    description:
      "Google Search Autocomplete. Get Google Search autocomplete suggestions via API for a given query. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query for which you want to get autocomplete suggestions.",
      },
      {
        name: "cp",
        type: "number",
        required: false,
        description:
          "Cursor position in the search query where you want to get autocomplete suggestions.",
        default: 0,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search_light",
    title: "Google Search Light",
    path: "/v1/google/search/light",
    methods: ["GET", "POST"],
    description:
      "Google Search Light. Scrape lightweight Google Search results via API: fast, cost-efficient, organic results only. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query you want to run on Google (supports advanced operators like site:, inurl:, intitle:).",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_shopping",
    title: "Google Shopping",
    path: "/v1/google/shopping",
    methods: ["GET", "POST"],
    description:
      "Google Shopping. Scrape Google Shopping results via API and retrieve structured product listings with prices, ratings, and merchant data. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Query to search on Google Shopping (product name, brand, category).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Location to localize results (e.g. New York, United States). Generates a UULE parameter automatically.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Encoded location parameter (UULE). Use location instead if you don't have a pre-encoded value.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_videos",
    title: "Google Videos",
    path: "/v1/google/videos",
    methods: ["GET", "POST"],
    description:
      "Google Videos. Search Google Videos via API and retrieve structured video results with metadata. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The search query you want to run on Google Videos.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Human-readable location to originate the search from. Note: location and uule cannot be used together.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google encoded location parameter. Note: uule and location cannot be used together.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: true,
        description: "Page number for pagination (1 = first page).",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of results per page (e.g. 10).",
        default: 10,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "search",
    title: "Search",
    path: "/v1/search",
    methods: ["GET", "POST"],
    description:
      "Search. One call walks engines in order and returns the first organic results. engines=auto tries Google, then Brave, Bing, DuckDuckGo, Yahoo, and Baidu. Omitted gl is us and omitted hl is en. There is no page parameter: the response is always pag… Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query.",
      },
      {
        name: "engines",
        type: "string",
        required: false,
        description:
          "Engine order. Default auto tries google, brave, bing, duckduckgo, yahoo, then baidu. A comma-separated list is followed as given. ddg and duck mean duckduckgo. Unknown names are ignored.",
        default: "auto",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country code. Defaults to us when omitted. For example us, fr, gb, de.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language code. Defaults to en when omitted. For example en, fr, de.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stats",
    title: "Stats",
    path: "/v1/stats",
    methods: ["GET"],
    description:
      "Stats. Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example google. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v1/google/search. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    name: "usage",
    title: "Usage",
    path: "/v1/usage",
    methods: ["GET"],
    description:
      "Usage. Retrieve real-time usage statistics and credit balance for your Autom account.",
    params: [],
  },
  {
    name: "yahoo_search",
    title: "Yahoo Search",
    path: "/v1/yahoo/search",
    methods: ["GET", "POST"],
    description:
      "Yahoo Search. Query Yahoo via API and retrieve structured organic results with country and language. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to Yahoo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
];
