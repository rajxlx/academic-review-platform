import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { run, get } from './db'

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10)
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash)
}

export async function createSession(userId: number) {
  const token = crypto.randomBytes(32).toString('hex')
  await run('INSERT INTO sessions (token, user_id) VALUES (?, ?)', [token, userId])
  return token
}

export async function getUserFromToken(token: string | undefined) {
  if (!token) return null
  const row: any = await get(
    `SELECT users.id, users.full_name, users.email, users.role
     FROM sessions JOIN users ON sessions.user_id = users.id
     WHERE sessions.token = ?`,
    [token]
  )
  return row || null
}

export async function deleteSession(token: string | undefined) {
  if (!token) return
  await run('DELETE FROM sessions WHERE token = ?', [token])
}
