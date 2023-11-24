import { dbConnect } from "@/app/lib/dbConnect";
import { MenuItem } from "@/models/MenuItem";

export async function POST(req) {
  //   const url = new URL(req.url);
  //   const id = url.searchParams.get("id");
  //   console.log(id);
  dbConnect();
  const body = await req.json();
  //   body.category = mongoose.Types.ObjectId(body.category);

  const newItem = await MenuItem.create(body);
  return Response.json(newItem);
}

export async function GET() {
  dbConnect();
  const allItems = await MenuItem.find();

  return Response.json(allItems);
}
