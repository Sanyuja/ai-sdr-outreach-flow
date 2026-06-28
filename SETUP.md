# Setup Guide — AI SDR Outreach Flow

Complete step-by-step guide to get the flows running.

## Prerequisites

- **n8n** (self-hosted or cloud)
- **Google Sheets API** (for data storage)
- **OpenAI API** (GPT-4o-mini for research, GPT-4o for message writing)
- **Apify** (LinkedIn scraper actor)
- **HeyReach** (LinkedIn outreach API)

---

## Step 1: Prepare Your Google Sheet

### 1.1 Create a new Google Sheet

Name it: `[Your Project] - AI SDR Prospect List`

### 1.2 Add column headers (in order):

```
Organization_name | Domain | CEO_First_name | CEO_Last_name | CEO_LinkedIn | Description | City | Country | Last_funding_type | Last_funding_date | ICP | Pain_point | Hook | Founder_detail | Product_type | LinkedIn_message | First_message | First_nudge | Second_nudge | message_stage | messages_generated_date | Sent_to_HeyReach | sent_to_heyreach_date
```

### 1.3 Get your Google Sheet ID

Open your sheet. The URL looks like:
```
https://docs.google.com/spreadsheets/d/[YOUR_GOOGLE_SHEET_ID]/edit
```

Copy the ID (the long string between `/d/` and `/edit`).

**Example:**
```
URL: https://docs.google.com/spreadsheets/d/1abc2def3ghi4jkl5mno6pqr7stu8vwx/edit
Sheet ID: 1abc2def3ghi4jkl5mno6pqr7stu8vwx
```

### 1.4 Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable "Google Sheets API"
4. Create a service account with Editor access to your sheet
5. Download the JSON key file (you'll paste this into n8n)

---

## Step 2: Set Up OpenAI API Keys

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create two keys:
   - One labeled "Enricher (gpt-4o-mini-search)"
   - One labeled "Copywriter (gpt-4o)"
3. Keep these safe — you'll need them in n8n

---

## Step 3: Set Up Apify

### 3.1 Create Apify Account

Go to [Apify.com](https://apify.com) and sign up.

### 3.2 Find a LinkedIn Scraper Actor

Search the Apify marketplace for "LinkedIn" and pick a company scraper. Note the Actor ID.

### 3.3 Get Your API Token

1. Go to Settings → API Tokens
2. Create a token, copy it

---

## Step 4: Set Up HeyReach

1. Create a [HeyReach](https://heyreach.io) account
2. Create a campaign for your outreach
3. Note the Campaign ID and API key

---

## Step 5: Import Flows into n8n

### 5.1 In n8n, go to Workflows

Click "Import from file" and upload:
1. `FLOWS/1-enricher.json`
2. `FLOWS/2-linkedin-outreach.json`

### 5.2 Replace Google Sheet ID in Both Flows

**⚠️ IMPORTANT:** The flows contain a placeholder `[YOUR_GOOGLE_SHEET_ID]`. You MUST replace it with your actual sheet ID.

For each flow:
1. Open the flow in n8n
2. Edit each Google Sheets node
3. Find the field that says `[YOUR_GOOGLE_SHEET_ID]`
4. Replace it with your actual Google Sheet ID (from Step 1.3)

**Flows to update:**
- `1-enricher.json` → Edit "Read Prospect Sheet1" and "Update Sheet Row1" nodes
- `2-linkedin-outreach.json` → Edit all Google Sheets nodes

### 5.3 Configure Credentials for Enricher Flow

Click each node and add credentials:

**Google Sheets node:**
- Credential type: Google Sheets OAuth2
- Paste your service account JSON key

**OpenAI node (Researcher AI1):**
- API Key: Your gpt-4o-mini-search key

### 5.4 Configure Credentials for LinkedIn Outreach Flow

**Google Sheets nodes:**
- Same as above

**OpenAI node (Layer 2 — Copywriter1):**
- API Key: Your gpt-4o key

**HeyReach node (Send to HeyReach):**
- Hardcode or store your API key in n8n secrets

---

## Step 6: Customize for Your Use Case

### 6.1 Update the Enricher Prompt

Edit the "Researcher AI1" node and update the system message and fields for your industry.

See [PROMPTS/enricher-prompt.md](PROMPTS/enricher-prompt.md) for industry examples.

### 6.2 Update the Copywriter Prompt

Edit the "Layer 2 — Copywriter1" node to match your positioning.

See [PROMPTS/](PROMPTS/) for examples.

---

## Step 7: Test with Sample Data

### 7.1 Add 5 test companies to your Google Sheet

Just fill in the `Organization_name` column. Example:
- Rippling
- Retool
- Stripe
- Brex
- Figma

### 7.2 Run the Enricher Flow

1. Open the Enricher workflow
2. Click "Execute Workflow"
3. Check your Google Sheet — it should fill in all the enriched data

### 7.3 Run the LinkedIn Outreach Flow

1. Open the LinkedIn Outreach workflow
2. Click "Execute Workflow"
3. Check your Sheet — it should fill in the 4 messages

### 7.4 Review the Generated Messages

Read through the messages. Do they look personalized? Do they mention specific details about the company/founder?

If yes, you're ready to scale. If no, adjust the prompts.

---

## Step 8: Set Up Weekly Extraction (Optional)

To automatically extract new leads every week, see [INTEGRATIONS/apify-setup.md](INTEGRATIONS/apify-setup.md).

---

## Troubleshooting

### "No output data returned"
- Check that Google Sheets node has "Always Output Data" enabled
- Make sure your service account has access to the Sheet

### "OpenAI API Error"
- Verify your API key is correct
- Check you haven't exceeded your rate limit
- Make sure gpt-4o-mini-search and gpt-4o are enabled in your OpenAI account

### "HeyReach not receiving leads"
- Double-check Campaign ID and API key
- Make sure CEO_LinkedIn field is populated (required for HeyReach)

### "[YOUR_GOOGLE_SHEET_ID] not found"
- You didn't replace the placeholder with your actual sheet ID
- Go back to Step 5.2 and replace it in both flows

---

## Next Steps

1. **Get data flowing** (run both workflows once)
2. **Review the output** (check messages, enrichment quality)
3. **Approve and send** (start with 5-10 test companies)
4. **Monitor results** (track acceptance rates, replies)
5. **Iterate prompts** (refine based on what works)

For B2B SaaS specifics, see [EXAMPLES/b2b-saas-example.md](EXAMPLES/b2b-saas-example.md).

