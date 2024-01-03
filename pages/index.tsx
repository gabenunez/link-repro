import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/1">Dashboard 1</Link>
      <Link href="/dashboard/2">Dashboard 2</Link>
    </>
  );
}
