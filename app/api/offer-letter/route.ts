import { run, query } from '@/lib/db';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

function isAdmin() {
  const cookieStore = cookies()
  return cookieStore.get('adminAuth')?.value === 'true'
}

export async function POST(request: Request) {
  if (!isAdmin()) {
    return NextResponse.json({ 
      success: false, 
      error: 'Unauthorized' 
    }, { status: 401 })
  }

  try {
    const body = await request.json();
    const { intern_name, intern_email, position, start_date, end_date, stipend, manager_name, manager_email, note } = body;

    if (!intern_name || !intern_email || !position) {
      return NextResponse.json({ 
        success: false, 
        error: 'Intern name, email, and position are required' 
      }, { status: 400 });
    }

    const result: any = await run(
      `INSERT INTO offer_letters (intern_name, intern_email, position, start_date, end_date, stipend, manager_name, manager_email, note, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [intern_name, intern_email, position, start_date, end_date, stipend || '0', manager_name || '', manager_email || '', note || '', 'sent']
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Offer letter generated and sent successfully!',
      id: result.lastInsertRowid 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
