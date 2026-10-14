// TEMPORARY STUB — replace with Turso/Supabase before going live.
export function query(sql: string, params: any[] = []): Promise<any[]> {
  console.warn("[db-stub] query() called");
  return Promise.resolve([]);
}
export function get(sql: string, params: any[] = []): Promise<any> {
  console.warn("[db-stub] get() called");
  return Promise.resolve(null);
}
export function run(sql: string, params: any[] = []): Promise<{ lastInsertRowid: number }> {
  console.warn("[db-stub] run() called");
  return Promise.resolve({ lastInsertRowid: 0 });
}
export default { query, get, run };
