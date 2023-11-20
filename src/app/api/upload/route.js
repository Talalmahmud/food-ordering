import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { dbConnect } from "@/app/lib/dbConnect";

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  dbConnect();
  const session = await getServerSession(authOption);
  const email = session.user.email;
  // let user = await User.findOne({ email });
  // user.name = body.name;
  // await user.save();
  try {
    await User.updateOne({ email }, { name: body.name }, { upsert: true });
    console.log("update user");
  } catch (error) {
    console.log(error);
  }

  return Response.json("updated");
}
