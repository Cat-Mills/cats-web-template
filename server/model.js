import { DataTypes, Model } from "sequelize";
import url from "url";
import connectToDb from "./db.js";
import util from "util";
import Sequelize from "sequelize";

const db = await connectToDb("postgresql:///template");

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(500),
    },
    adminStatus: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing to database...");
  await db.sync();
  console.log("Finished syncing database!");
}


// exports here
export { User };
