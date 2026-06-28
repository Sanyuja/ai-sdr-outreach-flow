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

## The Results

**50 prospects campaign:**
- **Connection acceptance rate: 40%** (20 connections)
- **Reply rate: 12%** (2-3 qualified replies)
- **Meetings booked: 2-3%** (1-2 meetings from 50)
- **Cost: $50** total API spend
- **Time: 4 hours** setup + 2 hours/week ongoing

Compare to:
- Cold email: 0.5% reply, $400/month, 40 hours/week
- Apollo/Outbound: 1-2% reply, $500/month
- Manual LinkedIn: 2-3% reply, 40 hours/week

## Why This Works

The system does what cold email can't: **real research + genuine personalization**.

Not this:
```
Hi Parker,

I noticed you're at Rippling. We help companies like you reach more customers.

Are you open to a quick chat?

Best,
[Name]
```

But this:
```
Parker, going from Zenefits to building one of the fastest-growing SaaS platforms 
in history — that's a rare second act. Would love to have you in my network.
```

One is a template. One is a person who's been paying attention.

The first gets 1% replies. This one gets 12% across a 4-message sequence.

## The Flow

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

## 30-Minute Setup

**Prerequisites:**
- n8n account (cloud or self-hosted)
- OpenAI API (GPT-4o + GPT-4o-mini)
- Apify account (LinkedIn scraper)
- HeyReach account (outreach API)
- Google Sheets + Google Cloud credentials

**Steps:**
1. Create Google Sheet with enrichment columns
2. Import n8n workflows (from GitHub)
3. Add credentials
4. Test on 10 prospects
5. Scale to 100+

30 minutes. Then 2 hours/week to run it.

## Cost Breakdown

| Tool | Cost | Why |
|------|------|-----|
| n8n | $0-50 | Cloud or self-hosted |
| OpenAI API | $20-40 | ~200 enrichments + 200 copywriter runs/month |
| Apify | $0-5 | ~100 LinkedIn extractions/month (free tier) |
| HeyReach | $25 | ~500 messages/month |
| **Total** | **$45-120** | Per 500-1000 prospects reached |

**Compare:** Apollo ($400) + Outbound ($500) + HubSpot ($1,200) = $2,100/month for worse results.

## Open Source

I'm releasing the entire system:
- ✅ Two n8n workflows (export-ready JSON)
- ✅ Industry config templates (B2B SaaS, Enterprise, Healthcare, D2C)
- ✅ Complete setup guide
- ✅ Real message examples
- ✅ Customization for your ICP

Because GTM teams shouldn't pay $500/month for bad automation.

## Next Steps

1. **Clone the repo** (link below)
2. **Follow the setup guide** (30 minutes)
3. **Deploy with 20-50 prospects** (1 week)
4. **Monitor results** (ongoing)

## Links

- **GitHub repo**: https://github.com/Sanyuja/ai-sdr-outreach-flow
- **Setup Guide**: SETUP.md in repo
- **B2B SaaS Example**: EXAMPLES/b2b-saas-example.md
- **Contributing**: CONTRIBUTING.md (add your industry config)

---

**The technology exists today.** GPT-4 can research. n8n can orchestrate. HeyReach can send.

You just need to stitch them together.

The results speak for themselves. Now you can replicate them.

