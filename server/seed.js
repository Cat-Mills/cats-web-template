import connectToDB from "./db.js";
import bcrypt from "bcryptjs";
import { User } from "./model.js";

const db = await connectToDB("postgresql:///template");

await db.sync({ force: true }).then(async () => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("test", salt);

  const users = [
    {
      username: "admin",
      password: hash,
      adminStatus: true,
    },
    {
      username: "cat",
      password: hash,
      adminStatus: true,
    },
  ];

  await User.bulkCreate(users);
  await console.log("db has been successfully reset and seeded!");
});
