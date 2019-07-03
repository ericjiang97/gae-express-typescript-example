// user.schema.ts

import GstoreNode from "gstore-node";

// Gstore setup
const gstore = GstoreNode.instances.get("default"); // This implies that you have set an instance earlier
const Schema = gstore.Schema;

type UserType = {
  userName: string;
  email: string;
  age?: number; // optional
  tags?: string[]; // optional
  birthday?: Date; // optional
} & { [propName: string]: any }; // Allow any other properties

// Schema with "explicitOnly" set to "false"
const schema = new Schema<UserType>(
  {
    userName: { type: String },
    email: { type: String },
    age: { type: Number, optional: true },
    tags: { type: Array, optional: true },
    birthday: { type: Date, optional: true }
  },
  { explicitOnly: false }
); // explicitOnly set to "false"

const User = gstore.model<UserType>("User", schema);

export default User;
