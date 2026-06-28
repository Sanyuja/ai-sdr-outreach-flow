# Apify Setup — Automated LinkedIn Lead Extraction

Extract new B2B SaaS prospects weekly using Apify LinkedIn scraper.

## Quick Start

1. Go to Apify.com, sign up, find a LinkedIn actor
2. Get your API token from Settings
3. Add HTTP Request node to enricher flow with your actor ID
4. Set schedule trigger for weekly extraction
5. Parse results to extract company names into enricher

## B2B SaaS Search Criteria

```json
{
  "searchTerm": "founder OR 'VP Sales' OR 'VP GTM' at SaaS",
  "companySize": {"min": 20, "max": 200},
  "fundingStage": ["Series A", "Series B", "Series C"],
  "location": "United States"
}
```

## Customizations

- **Enterprise**: Change companySize to min 500, add IPO stage
- **Healthcare**: Add companyIndustry: "Healthcare", search for "CMO" or "Chief Medical Officer"
- **D2C**: Search "founder at d2c", reduce companySize to 5-100

See full guide in repo docs.
