import { AirVent } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between  mx-auto max-w-4xl h-16">
        <Link href="/" className="items-center flex gap-4">
          <AirVent className="h-6 w-6" />
          <span className="font-bold text-xl">next-secure.</span>
        </Link>
        <div>
          <Link href={"/sign-up"} className={buttonVariants()}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
