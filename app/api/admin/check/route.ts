import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const auth = cookieStore.get('adminAuth')
  
  return NextResponse.json({ 
    isAdmin: auth?.value === 'true'
  })
}
