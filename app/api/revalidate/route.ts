import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

// Sanity webhook secret for verification
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET || 'your-webhook-secret';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type?: string;
      _id?: string;
    }>(req, SANITY_WEBHOOK_SECRET);

    // Validate the webhook signature
    if (!isValidSignature) {
      console.error('Invalid webhook signature');
      return NextResponse.json({ success: false, message: 'Invalid signature' }, { status: 401 });
    }

    // Log the received webhook
    console.log('Received webhook from Sanity:', body);

    if (!body) {
      console.error('Missing webhook body');
      return NextResponse.json({ success: false, message: 'Missing webhook body' }, { status: 400 });
    }

    // Get the document type and ID from the webhook body
    const documentType = body._type;
    const documentId = body._id;

    if (!documentType || !documentId) {
      console.error('Missing document type or ID in webhook');
      return NextResponse.json({ success: false, message: 'Missing document data' }, { status: 400 });
    }

    // Revalidate specific tags based on the document type
    const tagsToRevalidate = [];
    
    switch (documentType) {
      case 'hero':
        tagsToRevalidate.push('hero');
        break;
      case 'navbar':
        tagsToRevalidate.push('navbar');
        break;
      case 'services':
        tagsToRevalidate.push('services');
        break;
      case 'trustedBy':
        tagsToRevalidate.push('trustedBy');
        break;
      case 'projects':
        tagsToRevalidate.push('projects');
        break;
      case 'blog':
        tagsToRevalidate.push('blog');
        break;
      case 'about':
        tagsToRevalidate.push('about');
        break;
      case 'experience':
        tagsToRevalidate.push('experience');
        break;
      case 'testimonials':
        tagsToRevalidate.push('testimonials');
        break;
      case 'contact':
        tagsToRevalidate.push('contact');
        break;
      case 'footer':
        tagsToRevalidate.push('footer');
        break;
      default:
        // Revalidate all content if the document type is unknown
        tagsToRevalidate.push('sanity');
    }
    
    // Always revalidate the homepage
    tagsToRevalidate.push('page');
    
    // Perform the revalidation for all collected tags
    console.log(`Revalidating tags: ${tagsToRevalidate.join(', ')}`);
    
    for (const tag of tagsToRevalidate) {
      try {
        revalidateTag(tag);
        console.log(`Successfully revalidated tag: ${tag}`);
      } catch (error) {
        console.error(`Error revalidating tag ${tag}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Revalidated ${documentType} with ID ${documentId}`,
      tags: tagsToRevalidate,
      revalidated: true,
      now: Date.now()
    });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ success: false, message: 'Error processing webhook' }, { status: 500 });
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Revalidation endpoint is ready to receive webhooks from Sanity'
  });
}
