import { NextResponse } from 'next/server';

const ADMIN_PASSWORD = 'admin123';  // Change this password!

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === ADMIN_PASSWORD) {
      // Set a simple session cookie
      const response = NextResponse.json({ 
        success: true, 
        message: 'Login successful' 
      });
      response.cookies.set('adminAuth', 'true', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      });
      return response;
    }

    return NextResponse.json({ 
      success: false, 
      error: 'Invalid password' 
    }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Login failed' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: 'Admin API is running' 
  });
}
