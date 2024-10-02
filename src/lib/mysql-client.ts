import { getEnv } from "waku";
import mysql, { ConnectionOptions } from "mysql2/promise";

const access: ConnectionOptions = {
  user: getEnv("DB_USER")!,
  password: getEnv("DB_PASSWORD")!,
  database: getEnv("DB_NAME")!,
  port: 3306,
  host: getEnv("DB_HOST")!,
};
export async function mySQLClient() {
  return await mysql.createConnection(access);
}
