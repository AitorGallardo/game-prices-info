'use client'

import Link from "next/link";



export default function NavLinks({links}:{links:{href:string, label:string}[]}) {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link key={`${href}${label}`} href={href}>
          {label}
        </Link>
      ))}
    </>
  );
}


