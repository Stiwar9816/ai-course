/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://magicdb_owner:koOuDTZA65MG@ep-odd-fog-a55tr55b.us-east-2.aws.neon.tech/magicdb?sslmode=require' 
    }
  };