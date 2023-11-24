import User from "@/models/User";

import { dbConnect } from "@/app/lib/dbConnect";

export async function GET() {
  dbConnect();

  const users = await User.find();

  return Response.json(users);
}
