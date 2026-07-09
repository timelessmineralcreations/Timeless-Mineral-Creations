-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "stripeSessionId" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'Pending',
    "customerName" TEXT,
    "customerEmail" TEXT,
    "customerPhone" TEXT,
    "collectionName" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "style" TEXT,
    "width" TEXT,
    "size" TEXT,
    "design" TEXT,
    "memorialMaterials" TEXT,
    "minerals" TEXT,
    "glow" TEXT,
    "engraving" TEXT,
    "totalPrice" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Awaiting Memorial Materials'
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_stripeSessionId_key" ON "Order"("stripeSessionId");
