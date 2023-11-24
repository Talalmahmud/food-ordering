import { dbConnect } from "@/app/lib/dbConnect";
import { Category } from "@/models/Cetagory";

export async function POST(req) {
  const { name } = await req.json();

  dbConnect();

  const newCategory = await Category.create({ name: name });
  if (newCategory) {
    return Response.json(newCategory);
  }

  return Response.json("Data not added");
}

export async function GET() {
  dbConnect();
  const allCategory = await Category.find();
  return Response.json(allCategory);
}

export async function PUT(req) {
  const { name, id } = await req.json();
  dbConnect();

  const updateItem = await Category.findByIdAndUpdate({ id }, { name: name });

  return Response.json(updateItem);
}

export async function DELETE(req) {
  const url = new URL(req.url);
  console.log(url);
  const _id = url.searchParams.get("_id");
  dbConnect();

  const deleteItem = await Category.findByIdAndDelete({ _id });

  return Response.json(deleteItem);
}
