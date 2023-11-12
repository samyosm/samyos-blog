import Link from "next/link";

export interface DisplayProps {
  label: string;
  href?: string;
  children: React.ReactNode;
}

export const Display = (props: DisplayProps) => {
  return (
    <div className="space-y-8 w-full">
      <div className="flex items-baseline gap-4">
        <h2 className="font-medium text-2xl md:text-3xl">{props.label}</h2>
        {props.href &&
          <Link href={props.href} className="underline text-sm">See More</Link>}
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {props.children}
      </div>
    </div>
  );
};
