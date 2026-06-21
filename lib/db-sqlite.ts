import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

// Create all tables
db.exec(
  -- Users table
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'student',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Orders table
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    student_id INTEGER,
    title TEXT NOT NULL,
    description TEXT,
    budget REAL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE
  );

  -- Contact Messages table (NEW!)
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_needed TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Sample data
  INSERT OR IGNORE INTO users (id, full_name, email, password, role) VALUES 
    (1, 'Demo Student', 'student@demo.com', 'password123', 'student'),
    (2, 'Demo Expert', 'expert@demo.com', 'password123', 'expert'),
    (3, 'Admin User', 'admin@demo.com', 'password123', 'admin');

  INSERT OR IGNORE INTO orders (id, order_number, student_id, title, budget, status) VALUES
    (1, 'ORD-001', 1, 'React Native App', 1499, 'in_progress'),
    (2, 'ORD-002', 1, 'Database Design', 799, 'completed'),
    (3, 'ORD-003', 1, 'Research Paper', 1999, 'pending');
);

export function query(sql: string) {
  return db.prepare(sql).all();
}

export function run(sql: string, params: any[] = []) {
  return db.prepare(sql).run(params);
}

export default db;
