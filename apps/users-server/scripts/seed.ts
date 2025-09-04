import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { customSeed } from "./customSeed";
import { Salt, parseSalt } from "../src/auth/password.service";
import { hash } from "bcrypt";
import { EnumUserDocumentType } from "../src/user/base/EnumUserDocumentType";
import { EnumUserGender } from "../src/user/base/EnumUserGender";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }
  const salt = parseSalt(BCRYPT_SALT);

  seed(salt).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: Salt) {
  console.info("Seeding database...");

  const client = new PrismaClient();

  const data = {
    username: "admin",
    password: await hash("admin", bcryptSalt),
    roles: ["user"],
    documentNumber: "",
    documentType: EnumUserDocumentType.NationalId,
    email: "example@example.com",
    familyNameAr: "",
    familyNameEn: "",
    firstNameAr: "",
    firstNameEn: "",
    gender: EnumUserGender.Male,
    isCompanyRepresentative: false,
    isSpecialNeeds: false,
    phoneCountrycode: "",
    secondNameAr: "",
    secondNameEn: "",
  };

  await client.user.upsert({
    where: {
      username: data.username,
    },

    update: {},
    create: data,
  });

  void client.$disconnect();

  console.info("Seeding database with custom seed...");
  customSeed();

  console.info("Seeded database successfully");
}
