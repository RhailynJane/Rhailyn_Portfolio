// Quick script to test database connection
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.200',
  port: 5432,
  database: 'pqwvuru3_rhaiportfolio',
  user: 'pqwvuru3_admin',
  password: '!Initi@al1996',
});

async function setupDatabase() {
  try {
    console.log('Testing connection...');
    const client = await pool.connect();
    console.log('Connected successfully!');
    
    // Create Feedback table
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Feedback" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "company" TEXT,
        "position" TEXT,
        "message" TEXT NOT NULL,
        "rating" INTEGER NOT NULL,
        "approved" BOOLEAN NOT NULL DEFAULT false,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log('✅ Feedback table created successfully!');
    
    client.release();
    await pool.end();
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

setupDatabase();
