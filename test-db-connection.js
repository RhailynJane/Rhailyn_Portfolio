// Test PostgreSQL database connection
const fs = require('fs');
const path = require('path');

// Read .env file manually
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=').replace(/^["']|["']$/g, ''); // Remove quotes
      process.env[key] = value;
    }
  });
}

loadEnv();

async function testConnection() {
  console.log('\n🔍 Testing Database Connection...\n');
  
  // Show what we're trying to connect to (mask password)
  const dbUrl = process.env.DATABASE_URL || '';
  const maskedUrl = dbUrl.replace(/:([^@]+)@/, ':****@');
  console.log('Connection String:', maskedUrl);
  
  try {
    // Use Prisma Client to test connection
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient({
      log: ['error', 'warn'],
    });
    
    console.log('\n⏳ Attempting to connect...\n');
    
    // Try to execute a simple query
    const result = await prisma.$queryRaw`SELECT version(), current_database(), current_user`;
    
    console.log('✅ Connection successful!\n');
    console.log('PostgreSQL Version:', result[0].version.split(' ').slice(0, 2).join(' '));
    console.log('Current Database:', result[0].current_database);
    console.log('Current User:', result[0].current_user);
    
    // Check if Feedback table exists
    const tables = await prisma.$queryRaw`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public' AND tablename = 'Feedback'
    `;
    
    if (tables.length > 0) {
      console.log('\n✅ Feedback table exists!');
      
      // Count feedback entries
      const count = await prisma.feedback.count();
      console.log(`   - Total feedback entries: ${count}`);
      
      const approvedCount = await prisma.feedback.count({ where: { approved: true } });
      console.log(`   - Approved feedback: ${approvedCount}`);
    } else {
      console.log('\n⚠️  Feedback table does NOT exist yet.');
      console.log('   Run: npx prisma db push');
      console.log('   Or execute the SQL in phpPgAdmin from create_feedback_table.sql');
    }
    
    await prisma.$disconnect();
    console.log('\n✅ Test completed successfully!\n');
    
  } catch (error) {
    console.error('\n❌ Connection failed!\n');
    console.error('Error:', error.message);
    
    if (error.message.includes('Authentication failed')) {
      console.log('\n💡 Tips:');
      console.log('   - Check username and password in .env file');
      console.log('   - Verify user has access to the database in cPanel');
      console.log('   - Password special characters must be URL-encoded:');
      console.log('     ! = %21, @ = %40, # = %23, etc.');
    }
    
    if (error.message.includes('does not exist')) {
      console.log('\n💡 Tip: Check database name in .env matches cPanel database');
    }
    
    process.exit(1);
  }
}

testConnection();
