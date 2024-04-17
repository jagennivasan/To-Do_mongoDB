import { connectDB } from "@/lib/mongodb";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title } = await req.json();
  await connectDB();
  await ToDo.create({ title });

  return NextResponse.json({ message: "Title created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const titles = await ToDo.find();
  return NextResponse.json({ titles });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await ToDo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Title Deleted" }, { status: 200 });
}
