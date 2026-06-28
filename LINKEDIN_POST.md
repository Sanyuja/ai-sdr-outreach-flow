# LinkedIn Post

*(Short, practical, reflective. Paste directly. Pick one of the two openers.)*

---

## Version A — reflective

I built an AI outreach system this month. The part that taught me the most wasn't the AI.

Wiring up GPT + Apify + HeyReach to research a prospect and draft a personalized LinkedIn sequence took an afternoon. That's the easy 20%.

The actual work was everything that decides what's *allowed* to reach a real person:

→ Where does a human have to look? (I built two review gates — one before the expensive model runs, one before anything sends.)

→ What is the model not allowed to do? (No fabricated facts. No templated openers. The system has a banned-pattern list because, left alone, every message drifts to "Your journey from X to Y…")

→ Which number actually tells you it's working? (Not sends. Not even replies. The one I watch is false-positive outreach — how often a message hits the wrong person. That's the number that quietly burns your reputation.)

Most "AI SDR" content celebrates speed and volume. I think that's backwards. The interesting problem isn't sending more — it's designing the controls so automation doesn't become spam-at-scale.

The honest place to leave it isn't "done." It's "gets better" — feedback loops, enrichment validation, reply classification. That's the next build.

Open-sourced the whole thing (workflows, prompts, architecture + guardrails doc): [repo link]

What's the control you wish more automated outreach had?

---

## Version B — punchier

"AI SDR" usually means: send more, faster.

I think that's the wrong goal.

I built one optimized for the opposite — fewer, better, defensible messages, with a human in the loop. The build taught me that the automation is the easy part. The system is the guardrails:

• 2 human review gates (placed by cost — cheap rejection before the expensive model, final approval before anything sends)
• The model is banned from fabricating facts or reusing openers
• The metric I optimize is false-positive outreach (wrong person/wrong fit) — driven DOWN, not sends up

Volume is a vanity metric. Quality is a judged one.

Full system open-sourced — workflows, prompts, and a guardrails doc that maps every failure mode to its control: [repo link]

---

**Note:** Replace `[repo link]` with https://github.com/Sanyuja/ai-sdr-outreach-flow before posting. Attach the architecture diagram (from ARCHITECTURE.md) as the post image — visual diagrams lift reach and reinforce the "system, not demo" framing.
