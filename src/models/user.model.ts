// user.model.ts
const { gstore } = require("../config/gstore");

import UserSchema from "../schemas/user.schema";

const UserModel = gstore.model("User", UserSchema);
export default UserModel;
