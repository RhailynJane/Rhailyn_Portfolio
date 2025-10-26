import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const NEW_URL = "https://github.com/RhailynJane/rhailyn_portfolio.git"

  // Try update by title first
  const byTitle = await prisma.project.updateMany({
    where: { title: { equals: "Professional Portfolio" } },
    data: { githubUrl: NEW_URL },
  })

  // Fallback: update any that still point to the old repo path
  const byOld = await prisma.project.updateMany({
    where: {
      githubUrl: { contains: "/Portfolio" },
    },
    data: { githubUrl: NEW_URL },
  })

  console.log(`Updated portfolio URL: byTitle=${byTitle.count}, byOld=${byOld.count}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
