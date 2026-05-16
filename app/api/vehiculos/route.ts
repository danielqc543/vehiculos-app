import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const vehiculo = await prisma.vehiculo.create({
    data: {
      placa: body.placa,
    },
  });

  return NextResponse.json(vehiculo);
}