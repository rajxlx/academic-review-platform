// Simple in-memory database for Cloudflare deployment
const messages: any[] = [];

export function query(sql: string, params: any[] = []) {
  return Promise.resolve([]);
}

export function get(sql: string, params: any[] = []) {
  return Promise.resolve(null);
}

export function run(sql: string, params: any[] = []) {
  const id = messages.length + 1;
  messages.push({ id, ...params });
  return Promise.resolve({ lastInsertRowid: id });
}

export default { query, get, run };
