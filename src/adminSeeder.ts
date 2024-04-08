import User from "./database/models/userModel";
import bcrypt from "bcrypt";

const adminSeeder = async (): Promise<void> => {
  const [data] = await User.findAll({
    where: {
      email: "seedadmin@email.com",
    },
  });
  if (!data) {
    await User.create({
      email: "seedadmin@email.com",
      password: bcrypt.hashSync("seedpassword", 8),
      username: "seedadmin",
      role: "admin",
    });
    console.log("Admin credentials seeded successfully");
  } else {
    console.log("Admin credentials already seeded");
  }
};

export default adminSeeder;
