import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { deleteSession } from '@/lib/auth'

export async function POST() {
  const cookieStore = cookies()
  const token = cookieStore.get('session')?.value
  await deleteSession(token)

  const response = NextResponse.json({ success: true })
  response.cookies.set('session', '', { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 0, path: '/' })
  return response
}
