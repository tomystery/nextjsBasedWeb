import Link from "next/link";
export default function A() {
  return (
    <div>
      <h1>A <Link href="/b">to B</Link></h1>
    </div>
  );
}