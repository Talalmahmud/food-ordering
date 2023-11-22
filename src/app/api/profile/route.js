import User from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { dbConnect } from "@/app/lib/dbConnect";
import { useParams } from "next/navigation";

export async function PUT(req) {
  const { name, url, street, address, postalCode, country, city, phone } =
    await req.json();

  // console.log(body);
  dbConnect();
  const session = await getServerSession(authOption);
  const email = session.user.email;
  // let user = await User.findOne({ email });
  // user.name = body.name;
  // await user.save();
  try {
    await User.updateOne(
      { email },
      {
        name: name,
        image: url,
        street: street,
        address: address,
        postalCode: postalCode,
        country: country,
        city: city,
        phone: phone,
      },
      { upsert: true }
    );
    console.log("update user");
  } catch (error) {
    console.log(error);
  }

  return Response.json("updated");
}

// export async function GET(req) {
//   const url = new URL(req.url);
//   const id = url.searchParams.get("id");
//   const user = await User.findOne({ id });
//   if (user) {
//     return Response.json(user);
//   }
//   return null;
// }

export async function GET(req) {
  dbConnect();
  const session = await getServerSession(authOption);
  const email = session.user.email;
  const user = await User.findOne({ email });
  if (user) {
    return Response.json(user);
  }
  return null;
}
