# I Built an AI-Assisted Outreach Workflow — With Guardrails

**Subtitle:** Most "AI SDR" content celebrates speed and volume. The harder, more useful problem is designing the controls that decide what's allowed to reach a real person.

---

## The Problem

Cold outreach is mostly broken, and not because people don't have tools. Apollo, Outbound, HubSpot — there's no shortage of software. The problem is that almost all of it optimizes for the wrong thing: **sending more, faster**. The result is templated messages with a first name swapped in, a 0.5% reply rate, and a slow erosion of how much anyone trusts their inbox.

I wanted to see if I could build something that optimized for the opposite: **fewer, better, defensible** messages — where automation does the research and drafting, but a human still decides what goes out.

The interesting engineering question wasn't "can AI write a LinkedIn message?" (obviously). It was: **where does this break, and what stops the break from reaching a person?**

---

## The Workflow

The system has two stages connected by a Google Sheet, which doubles as the human review surface.

1. **Extraction** — Apify pulls a weekly list of target companies.
2. **Enrichment** — GPT researches each company: the founder, the funding stage, and most importantly *who they sell to* (their ICP) and *why reaching those buyers at scale is hard for them* (their pain point).
3. **Human Gate 1** — a reviewer spot-checks the research before any messages are written.
4. **Message generation** — GPT writes a four-message sequence (connection request, first message, two nudges), each grounded in the enrichment, not a template.
5. **Human Gate 2** — the reviewer reads a sample in the sheet before anything sends.
6. **Sending** — approved prospects go to HeyReach in batches of 25, deduplicated on a "sent" flag.

Everything lives in the sheet, so the person who owns the relationship can approve work without ever opening n8n.

*(Full architecture diagram, inputs/outputs, and failure table are in the [repo](https://github.com/Sanyuja/ai-sdr-outreach-flow/blob/main/ARCHITECTURE.md).)*

---

## Design Choices (and Why)

A few decisions did most of the work:

**ICP is the highest-weighted field.** Anyone can scrape a company description. The thing that makes a message land is correctly naming *who that company sells to* and reflecting back their actual go-to-market pain. So the enrichment prompt treats ICP and pain point as the priority, and Gate 1 reviews them first. Get this wrong and you've written a confident, fluent, irrelevant pitch.

**Two human gates, placed by cost.** Gate 1 sits *before* message generation — rejecting a bad record there is cheap, before you've spent the expensive model on it. Gate 2 sits *before* sending — because the only truly irreversible step is the one that reaches a stranger's inbox.

**Guardrails against the model's bad habits.** The system explicitly forbids fabricating named facts (a person, a date, a dollar figure it can't support), bans the em dash because it's a tell, and supplies a banned-pattern list so every "first nudge" doesn't collapse into the same sentence. These are small rules that prevent the failure modes that make automation look cheap.

**Measure quality, not volume.** The metric I care most about isn't sends or even replies — it's the **false-positive outreach rate**: how often a message goes to the wrong-fit or wrong-person. That's the number that, left unwatched, quietly burns a sender's reputation.

---

## What Worked / What Didn't

**Worked:**
- Putting the review surface in a Google Sheet meant a non-technical reviewer could run the approval step. The automation didn't have to be trusted blindly.
- Forcing the enrichment to commit to an ICP and a specific pain point made the downstream messages noticeably less generic.
- Placing the cheap gate before the expensive model saved real token spend on prospects that were never going to be a fit.

**Didn't (or needed babysitting):**
- The model *wanted* to template. Left alone, every opener drifted toward "Your journey from X to Y…" It took explicit variation instructions and a banned-pattern list to break the pattern — and it still needs a human sample-read.
- Enrichment hallucination is real. The model will, given a thin company, confidently invent a funding round. The prompt constraints reduce it; they don't eliminate it. That's exactly why Gate 1 exists.
- Same-name matching on LinkedIn URLs is a genuine wrong-person risk that prompt engineering alone doesn't solve — it needs validation logic I haven't fully automated yet.

---

## Lessons Learned

The biggest one: **the automation was the easy 20%. The system was the controls.** Wiring GPT + Apify + HeyReach together is an afternoon. Deciding *where a human has to look*, *what the model is not allowed to do*, and *which number tells you it's working* — that's the actual design work, and it's what separates a useful internal tool from spam-at-scale.

The second: **the honest place to leave a project is "gets better," not "done."** The most valuable next steps are a feedback loop (feed the openings that earned good replies back into the prompt), automated enrichment validation (so humans only review low-confidence records), and reply classification. A system that improves with use is a stronger story than a demo that ran once.

---

## The Repo

Everything is open source — two n8n workflows, the prompts, industry config templates, the architecture and guardrails doc, and a setup guide.

**https://github.com/Sanyuja/ai-sdr-outreach-flow**

If you're building in this space, I'd genuinely rather compare notes on *controls and quality measurement* than on send volume. That's where the interesting problems are.
