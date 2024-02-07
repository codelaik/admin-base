import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient();
async function main() {
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@codeliak.com' },
    update: {
        // password: await bcrypt.hash('JoshSucks', await bcrypt.genSalt(10))
    },
    create: {
      email: 'admin@codeliak.com',
      username: 'SuperAdmin',
      password: await bcrypt.hash('JoshSucks', await bcrypt.genSalt(10)),
      role: 'SUPER_ADMIN'
    },
  })
  console.log({ superAdmin })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

