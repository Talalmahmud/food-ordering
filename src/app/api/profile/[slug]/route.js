import User from "@/models/User";

export async function GET(req) {
  const { slug } = req.query;
  console.log(slug);
  //   const user = await User.findOne({ slug });
  //   if (user) {
  //     return Response.json(user);
  //   }
  return null;
}
