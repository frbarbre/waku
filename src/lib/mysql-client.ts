import { getEnv } from "waku";
import mysql, { ConnectionOptions } from "mysql2/promise";

interface MySQLClient extends mysql.Connection {
  query: (sql: string) => Promise<[any, any]>;
}

const access: ConnectionOptions = {
  user: getEnv("DB_USER")!,
  password: getEnv("DB_PASSWORD")!,
  database: getEnv("DB_NAME")!,
  port: 3306,
  host: getEnv("DB_HOST")!,
};
export async function mySQLClient(): Promise<MySQLClient> {
  return (await mysql.createConnection(access)) as MySQLClient;
}
