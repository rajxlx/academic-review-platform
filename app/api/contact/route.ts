import { run, query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, service_needed, message } = body;

    if (!full_name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        error: 'Name, Email, and Message are required' 
      }, { status: 400 });
    }

    const result: any = await run(
      'INSERT INTO messages (full_name, email, phone, service_needed, message) VALUES (?, ?, ?, ?, ?)',
      [full_name, email, phone || '', service_needed || '', message]
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We will get back to you soon.',
      id: result.lastInsertRowid 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages: any = await query('SELECT * FROM messages ORDER BY created_at DESC');
    return NextResponse.json({ success: true, messages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
