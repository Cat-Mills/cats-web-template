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

class Product extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    productType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productDesc: {
      type: DataTypes.STRING
    },
    productNotes: {
      type: DataTypes.STRING
    }
  },
  {
    modelName:"product",
    sequelize: db
  }
)

class Hero extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Hero.init(
  {
    heroId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    heroUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    heroCTA: {
      type: DataTypes.STRING,
    },
    heroLink: {
      type: DataTypes.STRING,
    },
    heroButton: {
      type: DataTypes.STRING
    }
  },
  {
    modelName: "hero",
    sequelize: db
  }
)


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing to database...");
  await db.sync();
  console.log("Finished syncing database!");
}


// exports here
export { User };
