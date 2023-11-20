import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";

export async function PUT(req) {
  const body = await req.json();
  console.log(body);
  await mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOption);
  const email = session.user.email;
  const findUser = await User.updateOne({ email }, { name: body.name });

  return Response.json("updated", findUser);
}
