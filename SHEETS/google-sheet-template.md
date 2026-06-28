# Google Sheet Template — Prospect List

## Column Order

Organization_name | Domain | CEO_First_name | CEO_Last_name | CEO_LinkedIn | Description | City | Country | Last_funding_type | Last_funding_date | ICP | Pain_point | Hook | Founder_detail | Product_type | LinkedIn_message | First_message | First_nudge | Second_nudge | message_stage | messages_generated_date | Sent_to_HeyReach | sent_to_heyreach_date

## Input Columns (You Fill In)
- **Organization_name** (required) — Company name, used as matching key

## Enricher Writes (Automatic)
- Domain, CEO names, CEO_LinkedIn
- Description, City, Country
- Funding info, ICP, Pain_point, Hook, Founder_detail, Product_type

## Copywriter Writes (Automatic)
- LinkedIn_message, First_message, First_nudge, Second_nudge

## Tracking (Automatic)
- message_stage, messages_generated_date
- Sent_to_HeyReach, sent_to_heyreach_date

## Setup

1. Create new Google Sheet
2. Add headers (copy column order above)
3. Enable Google Sheets API in Google Cloud Console
4. Create service account, download JSON key
5. Share sheet with service account email
6. Add credentials to n8n

## Monitoring Tips

Create a view called "Ready to Send" that filters:
- CEO_LinkedIn is not empty
- Sent_to_HeyReach is empty
