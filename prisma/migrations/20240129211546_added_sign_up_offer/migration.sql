-- CreateTable
CREATE TABLE "signUpOffer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "signUpOffer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "signUpOffer" ADD CONSTRAINT "signUpOffer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
