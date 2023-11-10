"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderItemProps {
  children: React.ReactNode;
  href: string;
}

export const HeaderItem = (props: HeaderItemProps) => {
  const pathname = usePathname();
  // TODO: Have it include /abc/xyz
  const current = pathname.substring(1) === props.href.substring(1);
  return (
    <li>
      <Link href={props.href} className={current ? "underline" : ""}>
        {props.children}
      </Link>
    </li>
  );
};
