# Setting Up Automatic Revalidation with Sanity Webhooks

This guide explains how to set up automatic revalidation for your Next.js portfolio site when content is published in Sanity. This ensures that your website updates immediately after publishing changes in Sanity Studio, without needing to manually refresh the page.

## How It Works

1. When you publish content in Sanity Studio, Sanity sends a webhook to your Next.js application
2. The webhook contains information about what document was changed
3. Your Next.js application revalidates the specific pages or components affected by the change
4. The website updates automatically with the new content

## Setup Instructions

### 1. Create a Webhook Secret

First, create a secret key that will be used to verify webhooks from Sanity:

1. Generate a random string to use as your webhook secret
2. Add this secret to your environment variables:

Create or update your `.env.local` file with:

```
SANITY_WEBHOOK_SECRET=your-random-secret-key
```

### 2. Configure the Webhook in Sanity

1. Log in to your [Sanity project dashboard](https://www.sanity.io/manage)
2. Select your project
3. Go to "API" > "Webhooks"
4. Click "Add webhook"
5. Configure the webhook with the following settings:
   - **Name**: Next.js Revalidation
   - **URL**: `https://your-website-url.com/api/revalidate` (replace with your actual website URL)
   - **Dataset**: production (or your dataset name)
   - **Trigger on**: Create, Update, Delete
   - **Filter**: Leave empty to trigger on all documents, or add specific document types
   - **Secret**: Enter the same secret you added to your environment variables
   - **HTTP method**: POST
   - **API version**: v2021-03-25 (or latest)
   - **Projection**: `{_id, _type}`
6. Click "Save"

### 3. Testing the Webhook

To test if your webhook is working:

1. Make a change to any content in Sanity Studio and publish it
2. Check your website - it should update automatically within a few seconds
3. Check your server logs for webhook confirmation messages

### 4. For Local Development

When developing locally, you can use a service like [ngrok](https://ngrok.com/) to expose your local server to the internet:

1. Install ngrok
2. Run your Next.js development server: `npm run dev`
3. In a separate terminal, run: `ngrok http 3000`
4. Use the ngrok URL (e.g., `https://abc123.ngrok.io/api/revalidate`) as your webhook URL in Sanity
5. This allows you to test webhooks during local development

## Troubleshooting

If your website isn't updating automatically after publishing changes:

1. Check your server logs for any webhook errors
2. Verify that the webhook URL is correct in your Sanity dashboard
3. Make sure your webhook secret matches in both Sanity and your environment variables
4. Check that your revalidation endpoint is correctly processing the webhook payload

## Additional Resources

- [Next.js Revalidation Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [Sanity Webhooks Documentation](https://www.sanity.io/docs/webhooks)
