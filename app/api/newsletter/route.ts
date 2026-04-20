import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Get ConvertKit credentials from environment variables
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiSecret) {
      console.error('CONVERTKIT_API_SECRET is not set');
      return NextResponse.json(
        { error: 'Newsletter service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    if (!formId) {
      console.error('CONVERTKIT_FORM_ID is not set');
      return NextResponse.json(
        { error: 'Newsletter service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Subscribe user to ConvertKit using form-specific endpoint
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiSecret,  // Try api_key instead of api_secret
          email: email,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle ConvertKit API errors
      console.error('ConvertKit API error:', data);
      
      // Check for specific error messages
      if (data.message && data.message.includes('already subscribed')) {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter!' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: response.status }
      );
    }

    // Success!
    return NextResponse.json(
      {
        success: true,
        message: 'Thanks for subscribing! Check your inbox for confirmation.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
