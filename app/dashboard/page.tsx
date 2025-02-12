import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const data = session?.user;
  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold underline">Dashboard Page</h1>
      <ul>
        <li>
          <p>Name: {data?.name}</p>
          <p>Email: {data?.email}</p>
        </li>
      </ul>
    </div>
  );
}
