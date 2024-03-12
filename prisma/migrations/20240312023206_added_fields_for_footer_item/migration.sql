/*
  Warnings:

  - Added the required column `title` to the `FooterItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FooterItem" ADD COLUMN     "link" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;
