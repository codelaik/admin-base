-- AlterTable
ALTER TABLE "User" ALTER COLUMN "disabled" DROP NOT NULL,
ALTER COLUMN "disabled" SET DEFAULT false;
