import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/Bhopal/resturent-collection"}>Resturent Collection</Link>
    </header>
  );
}
