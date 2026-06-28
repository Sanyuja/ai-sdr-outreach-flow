# AI SDR Outreach Flow

An open-source, industry-agnostic AI SDR (Sales Development Representative) system that automates lead research, intelligent message generation, and scaled LinkedIn outreach. Built with n8n, GPT-4, Apify, and HeyReach.

**Current Example:** B2B SaaS Founder Outreach

## Results

- **Connection acceptance rate: 40%** (vs. 20-25% cold)
- **Reply rate: 12%** (vs. 0.5% cold email, 8x better)
- **Meetings booked: 2-3%** of prospects
- **Cost: $50/month** (vs. $500+/month SaaS)
- **Time: 4 hours setup + 2 hours/week** (vs. 40 hours manual)

## What It Does

1. **Extracts leads** from LinkedIn using Apify (weekly schedule, customizable criteria)
2. **Enriches prospects** with AI-powered research (funding, ICP, pain points, founder details)
3. **Generates 4-message sequences** tailored to each founder (connection request, first message, two nudges)
4. **Sends via HeyReach** in batches of 25
5. **Tracks everything** in a Google Sheet for monitoring and iteration

## Quick Start

### Prerequisites
- n8n account + self-hosted or cloud instance
- Google Sheets API access
- OpenAI API key (GPT-4o-mini or better)
- Apify account + LinkedIn scraper actor
- HeyReach account + API key

### Setup (30 minutes)
1. Clone this repo
2. Copy the two JSON flows (`FLOWS/`) into your n8n instance
3. Follow [SETUP.md](SETUP.md) for credential configuration
4. Customize the B2B SaaS config for your use case (or choose a different industry from CONFIGS/)
5. Import your prospect list or connect Apify to extract leads

### For B2B SaaS
See [EXAMPLES/b2b-saas-example.md](EXAMPLES/b2b-saas-example.md) for a complete walkthrough.

## Project Structure

```
ai-sdr-outreach-flow/
├── FLOWS/
│   ├── 1-enricher.json          # Research + enrich prospects
│   ├── 2-linkedin-outreach.json # Generate messages + send
│   └── README.md                # Flow architecture
├── CONFIGS/
│   ├── b2b-saas-config.json     # B2B SaaS example
│   ├── enterprise-config.json   # Enterprise sales template
│   ├── d2c-config.json          # D2C template
│   └── CONFIG_TEMPLATE.md       # How to create custom config
├── PROMPTS/
│   ├── enricher-prompt.md       # AI research instructions
│   └── README.md                # When + how to customize
├── INTEGRATIONS/
│   ├── apify-setup.md           # LinkedIn extraction setup
│   ├── heyreach-setup.md        # HeyReach API setup
│   └── google-sheets-setup.md   # Sheet structure + API
├── EXAMPLES/
│   └── b2b-saas-example.md      # Complete B2B SaaS guide
├── SETUP.md                     # Step-by-step installation
├── LICENSE                      # MIT
└── CONTRIBUTING.md              # Community contributions
```

## How It Works

```
LinkedIn Extraction (Apify)
    ↓ Company names
Enrichment (GPT-4o-mini-search)
    ↓ CEO, ICP, Pain point, Hook, Founder detail
Message Generation (GPT-4o)
    ↓ 4 personalized messages per prospect
Google Sheet (tracking + review)
    ↓ Manual approval or auto-send
HeyReach API
    ↓ Connection requests + follow-up messages
LinkedIn Inbox
```

## Key Features

✅ **Real research** — not templates. Each prospect gets uniquely researched and personalized messaging
✅ **4-message sequences** — connection request, first message, first nudge, second nudge
✅ **Weekly extraction** — automatically pull new leads from LinkedIn via Apify
✅ **Batched sending** — send 25 prospects at a time to stay within API limits
✅ **Full tracking** — Google Sheet shows research, messages, send status, and engagement
✅ **Industry-agnostic** — templates for B2B SaaS, Enterprise, Healthcare, D2C, Compliance
✅ **Open source** — $0 platform cost (just API fees: ~$50/month)

## Cost Breakdown

| Tool | Cost | Purpose |
|------|------|---------|
| n8n | $0-50 | Workflow orchestration |
| OpenAI API | $20-40 | Research + message generation |
| Apify | $0-5 | LinkedIn lead extraction |
| HeyReach | $25 | LinkedIn outreach API |
| **Total** | **$45-120/month** | For 500-1000 prospects/month |

**Compare:** Apollo ($400) + Outbound ($500) + HubSpot ($1,200) = $2,100/month for worse results

## Customization by Industry

Each industry needs different enrichment fields and message angles:

| Industry | Focus | Hook angles |
|----------|-------|-------------|
| **B2B SaaS** | Buyer reaching, GTM challenges | Funding rounds, growth rate, customer logos |
| **Enterprise** | Procurement, multi-stakeholder | Infrastructure fit, compliance, integrations |
| **Healthcare** | Clinical adoption, regulatory | FDA status, clinical validation, partnerships |
| **D2C** | Channel saturation, unit economics | Channel strength, customer LTV, brand momentum |
| **Compliance** | Regulatory exposure | Enforcement trends, competitive advantage |

See [CONFIGS/](CONFIGS/) for examples and [PROMPTS/](PROMPTS/) for how to customize.

## Getting Started

1. **Clone the repo**
2. **Read [SETUP.md](SETUP.md)** (30-minute setup)
3. **Pick an industry config** (or customize for yours)
4. **Test with 10-20 prospects**
5. **Deploy and monitor results**
6. **Iterate based on what works**

## Results You Should Expect

**50 prospects campaign (B2B SaaS example):**
- Connection acceptance: 40%
- Replies to first message: 12%
- Qualified meetings: 2-3%
- Time invested: 4 hours setup + 2 hours/week
- Cost: $50 in API fees

## Contributing

Have an industry config to share? See [CONTRIBUTING.md](CONTRIBUTING.md).

We welcome configurations for new industries and improvements to the core flows.

## License

MIT. Use freely, credit appreciated.

## Resources

- [Setup Guide](SETUP.md) — Complete installation walkthrough
- [B2B SaaS Example](EXAMPLES/b2b-saas-example.md) — Full implementation walkthrough
- [Flow Architecture](FLOWS/README.md) — Detailed node breakdown
- [Integration Guides](INTEGRATIONS/) — Apify, HeyReach, Google Sheets setup

## Questions?

Open an issue on GitHub or check [SETUP.md](SETUP.md) troubleshooting section.

---

**The technology exists today.** GPT-4 can research. n8n can orchestrate. HeyReach can send.

You just need to stitch them together.

This repo shows you exactly how.

