import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getUserFromToken } from '@/lib/auth'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('session')?.value
  const user = await getUserFromToken(token)

  if (!user) {
    return NextResponse.json({ success: false }, { status: 401 })
  }
  return NextResponse.json({ success: true, user })
}
