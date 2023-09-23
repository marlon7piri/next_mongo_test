import { NextResponse } from "next/server";

import {prisma} from '@/libs/prisma.js'

export async function GET(request, { params }) {


  const productfind = await prisma.products.findUnique({
    where: { id: Number(params.id) },
  });

  return NextResponse.json(productfind);
}

export async function PUT(request, { params }) {
  return NextResponse.json("Actualizando el  producto" + params.id);
}
export async function DELETE(request, { params }) {

  const productdeleted = await prisma.products.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(productdeleted);
}
