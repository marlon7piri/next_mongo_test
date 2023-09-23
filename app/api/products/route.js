import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma.js";

export async function GET() {
  const allproducts = await prisma.products.findMany();

  return NextResponse.json(allproducts);
}
