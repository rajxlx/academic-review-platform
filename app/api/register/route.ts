import { NextResponse } from 'next/server'
import { run, get } from '@/lib/db'
import { hashPassword, createSession } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { full_name, email, password, role } = await request.json()

    if (!full_name || !email || !password) {
      return NextResponse.json({ success: false, error: 'Name, email, and password are required' }, { status: 400 })
    }
    if (password.length < 6) {
      return NextResponse.json({ success: false, error: 'Password must be at least 6 characters' }, { status: 400 })
    }

    const existing = await get('SELECT id FROM users WHERE email = ?', [email])
    if (existing) {
      return NextResponse.json({ success: false, error: 'An account with this email already exists' }, { status: 409 })
    }

    const password_hash = hashPassword(password)
    const result: any = await run(
      'INSERT INTO users (full_name, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [full_name, email, password_hash, role || 'student']
    )

    const token = await createSession(result.lastInsertRowid)

    const response = NextResponse.json({ success: true, message: 'Account created' })
    response.cookies.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // set true once the site is on HTTPS
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    })
    return response
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
