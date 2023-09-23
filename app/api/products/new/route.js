import { NextResponse } from "next/server";

import {prisma} from '@/libs/prisma'

export async function POST(request) {
  const body = await request.json();

  const { nombre, precio, descripcion,imagen } = body;
console.log(typeof(precio))

  const productnew = await prisma.products.create({
    data: {
      nombre,
      precio,
      descripcion,
      imagen
    },
  });
  return  NextResponse.json(productnew);
}
