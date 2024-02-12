import { PrismaClient, Role } from '@prisma/client';
import { encrypt } from '../src/utils';
const prisma = new PrismaClient();
async function main() {
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@codelaik.com' },
    update: {
        // password: await bcrypt.hash('JoshSucks', await bcrypt.genSalt(10))
    },
    create: {
      email: 'admin@codelaik.com',
      username: 'SuperAdmin',
      password: await encrypt('JoshSucks'),
      role: Role.SUPER_ADMIN
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

