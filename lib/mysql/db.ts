// MySQL Database Connection for WHC
// This file provides the database connection for your portfolio hosted on WHC

import mysql from 'mysql2/promise';

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'pqwvuru3_rhaiportfolio',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pqwvuru3_rhaiportfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Create connection pool
let pool: mysql.Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

// Query helper function
export async function query(sql: string, params?: any[]) {
  const pool = getPool();
  const [results] = await pool.execute(sql, params);
  return results;
}

// Close pool (useful for cleanup)
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
