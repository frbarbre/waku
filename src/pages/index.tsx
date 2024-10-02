import { Link } from "waku";

import { Counter } from "../components/counter";
import { mySQLClient } from "../lib/mysql-client";

export default async function HomePage() {
  const client = await mySQLClient();
  const [rows] = await client.query("SELECT * FROM microblog_posts");

  return (
    <div>
      <title>Hello</title>

      <pre>{JSON.stringify(rows, null, 2)}</pre>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
