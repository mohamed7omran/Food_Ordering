import User from "../../models/User";
import mongoose from "mongoose";
import authOptions from "@/app/api/auth/[...nextauth]/route";
export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  if ("username" in data) {
    const updateUser = await User.updateOne(
      { email },
      { userName: data.userName }
    );
  }
  return Response.json(updateUser);
}
