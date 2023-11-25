import User from "@/models/User";

import { dbConnect } from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOption);

  dbConnect();

  const users = await User.find({});

  return Response.json(users);
}
