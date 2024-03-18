-- CreateTable
CREATE TABLE "FooterList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "FooterList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooterItem" (
    "id" SERIAL NOT NULL,
    "listId" INTEGER NOT NULL,

    CONSTRAINT "FooterItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FooterItem" ADD CONSTRAINT "FooterItem_listId_fkey" FOREIGN KEY ("listId") REFERENCES "FooterList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
