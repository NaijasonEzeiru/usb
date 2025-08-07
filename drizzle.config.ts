// import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

// export default {
//   schema: "./src/db/schema/*",
//   breakpoints: false,
//   driver: "pg",
//   out: "./drizzle",
//   dbCredentials: { connectionString: process.env.DATABASE_URL! },
// } satisfies Config;

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema/*",
  dialect: "postgresql",
  breakpoints: false,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
