-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "siteName" TEXT NOT NULL DEFAULT E'',
    "siteDescription" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);
