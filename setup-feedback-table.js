// Quick script to create Feedback table via SSH tunnel
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

async function setup() {
  try {
    console.log('Testing database connection...')
    await prisma.$connect()
    console.log('✅ Connected to database')

    console.log('\nCreating Feedback table...')
    await prisma.$executeRawUnsafe(`
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
    `)
    console.log('✅ Feedback table created')

    console.log('\nCreating indexes...')
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "Feedback_approved_idx" ON "Feedback"("approved");
    `)
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "Feedback_createdAt_idx" ON "Feedback"("createdAt" DESC);
    `)
    console.log('✅ Indexes created')

    console.log('\nVerifying table...')
    const result = await prisma.$queryRawUnsafe(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'Feedback';
    `)
    console.log('✅ Table verification:', result)

    console.log('\n✅ Database setup complete!')
  } catch (error) {
    console.error('❌ Error:', error.message)
    if (error.code) console.error('Error code:', error.code)
  } finally {
    await prisma.$disconnect()
  }
}

setup()
