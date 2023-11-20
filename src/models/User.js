import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Must enter your email."],
      unique: true,
    },
    password: {
      type: String,

      required: [true, "Must enter your password."],
    },
  },
  { timestamps: true }
);

// UserSchema.post("validate", function (user) {
//   const userPassword = user.password;
//   const salt = bcrypt.genSaltSync(10);
//   user.password = bcrypt.hashSync(userPassword, salt);
// });

const User = models.User || model("User", UserSchema);
export default User;
