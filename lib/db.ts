import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

// Create messages table
db.exec(
  'CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT, email TEXT, phone TEXT, service_needed TEXT, message TEXT, status TEXT DEFAULT "pending", created_at DATETIME DEFAULT CURRENT_TIMESTAMP)'
);

export function query(sql) {
  return db.prepare(sql).all();
}

export function run(sql, params = []) {
  return db.prepare(sql).run(params);
}

export default db;
