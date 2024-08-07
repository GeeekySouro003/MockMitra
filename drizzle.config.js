/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://mockmitra_owner:RM7ba8GQLlSj@ep-cool-dawn-a5ck6s83.us-east-2.aws.neon.tech/mockmitra?sslmode=require',
    }
  };