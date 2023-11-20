import User from "@/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { dbConnect } from "@/app/lib/dbConnect";

export async function POST(req) {
  const { email, password } = await req.json();

  dbConnect();

  const salt = bcrypt.genSaltSync(10);
  const hasPassword = bcrypt.hashSync(password, salt);
  const user = {
    email: email,
    password: hasPassword,
  };

  const newUser = await User.create(user);

  return Response.json(newUser);
}
