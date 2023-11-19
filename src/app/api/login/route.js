import User from "@/models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();

  await mongoose.connect(
    "mongodb+srv://mahmudtalal2:Osthir.2024@cluster0.mhqlp9e.mongodb.net/?retryWrites=true&w=majority"
  );

  const newUser = await User.create(body);

  return Response.json(newUser);
}
