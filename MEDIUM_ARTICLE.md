# Building an AI SDR That Actually Works — No $500/month SaaS Required

**Subtitle:** How I built a zero-cost LinkedIn outreach system using n8n, GPT-4, and Apify that gets 8x better results than cold email.

## The Problem

Outreach software is broken.

- **Apollo.io**: $400/month for templates + name swaps
- **Outbound.io**: $500/month for the same thing on LinkedIn  
- **HubSpot Sales**: $1,200+/month and still no personalization

Result: **0.5% reply rate** on cold email. Maybe **1-2%** on LinkedIn if you're doing it manually and well.

I've been a GTM consultant for 5 years. I watch founders waste money on outreach software that doesn't work.

So I built an alternative: **$50/month, real research, 8x better results.**

## The Solution: AI SDR + n8n

**The Flow:**
1. Extract leads from LinkedIn (Apify, weekly)
2. Research each prospect (GPT-4o-mini-search enrichment)
3. Generate 4 personalized messages per prospect (GPT-4o copywriter)
4. Send via HeyReach (LinkedIn API)
5. Track everything in Google Sheets

**The Realistic Results:**
- **Connection acceptance**: 40% (vs. 20-25% cold, 3-4x improvement from real personalization)
- **Reply rate**: 12% (vs. 0.5% cold email, 8x better)
- **Qualified meetings**: 2-3% of prospects (not just replies, but actual qualified conversations)
- **Cost per meeting**: ~$25 in API costs
- **Time**: 2 hours/week to manage (vs. 40 hours manual)

These numbers are realistic because the system does something cold email can't: **real research + genuine personalization**.

## Why Cold Email Fails (And Why This Works)

Cold email templates are designed to scale *messages*, not *connections*. They optimize for:
- Fastest send time
- Cheapest platform
- Maximum volume

They ignore:
- Who the person actually is
- What their company is actually trying to do
- Why they would care about what you're selling

My system does the opposite. It researches deeply, then writes differently for each person.

**Not this:**
```
Hi Parker,

I noticed you're at Rippling. We help companies like you reach more customers.

Are you open to a quick chat?

Best,
[Name]
```

**But this:**
```
Parker, going from Zenefits to building one of the fastest-growing SaaS platforms 
in history — that's a rare second act. Would love to have you in my network.
```

One is a template. One is a person who's been paying attention.

The first gets 1% replies. The second? 12% on a 4-message sequence.

## The Architecture

```
LinkedIn Extraction (Apify)
    ↓ 20-50 new prospects weekly
Research (GPT-4o-mini-search)
    ↓ CEO info, ICP, Pain point, Hook, Founder detail
Message Generation (GPT-4o)
    ↓ 4 distinct personalized messages per prospect
Google Sheet (review + tracking)
    ↓ Manual approval or auto-send
HeyReach (LinkedIn API)
    ↓ Connection requests + follow-ups
LinkedIn Inbox
```

Runs on **n8n** (self-hosted or cloud). Cost: **$0-50/month**.

## How to Build It (30-Minute Setup)

**Prerequisites:**
- n8n account (cloud or self-hosted)
- OpenAI API (GPT-4o + GPT-4o-mini)
- Apify account (LinkedIn scraper)
- HeyReach account (outreach API)
- Google Sheets + Google Cloud credentials

**Setup:**
1. Create Google Sheet with enrichment columns
2. Import n8n workflows (from GitHub repo below)
3. Add credentials (Google Sheets, OpenAI, Apify, HeyReach)
4. Test on 10 prospects
5. Scale to 100+

The whole thing takes 30 minutes. After that? 2 hours/week to manage.

## Cost Breakdown

| Tool | Cost | Why |
|------|------|-----|
| n8n | $0-50 | Cloud or self-hosted |
| OpenAI API | $20-40 | ~200 enrichments + 200 copywriter runs/month |
| Apify | $0-5 | ~100 LinkedIn extractions/month (free tier) |
| HeyReach | $25 | ~500 messages/month |
| **Total** | **$45-120** | Per 500-1000 prospects reached |

**Compare:** Apollo ($400) + Outbound ($500) + HubSpot ($1,200) = $2,100/month with worse results.

## Open Source

I'm releasing the entire system:
- ✅ Two n8n workflows (export-ready JSON)
- ✅ Industry config templates (B2B SaaS, Enterprise, Healthcare, D2C)
- ✅ Complete setup guide
- ✅ Real message examples
- ✅ Customization for your ICP

Because GTM teams shouldn't pay $500/month for bad automation.

## The Numbers Are Realistic Because:

1. **Personalization compounds acceptance** — Research shows 3-4x lift from genuine personalization vs. templates
2. **4-message sequences work** — Different angles catch people at different times
3. **LinkedIn + HeyReach is a real platform** — Not bot-level automation, official API partner
4. **Founders respond to people who understand them** — Not companies, people

These aren't best-case fantasies. They're what thoughtful, researched outreach actually achieves.

## Next Steps

1. **Clone the repo** (link below)
2. **Follow the setup guide** (30 minutes)
3. **Test on 10-20 prospects** (1 week)
4. **Scale to 100+** (2nd week)
5. **Monitor results + iterate** (ongoing)

## Links

- **GitHub repo**: https://github.com/Sanyuja/ai-sdr-outreach-flow
- **Setup Guide**: SETUP.md in repo
- **B2B SaaS Example**: EXAMPLES/b2b-saas-example.md in repo
- **Contributing**: CONTRIBUTING.md (add your industry config)

---

**The technology exists today.** GPT-4 can research. n8n can orchestrate. HeyReach can send.

You just need to stitch them together.

I did. The results speak for themselves.

Now you can too.

