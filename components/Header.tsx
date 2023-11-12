import { HeaderItem } from "@/components/HeaderItem";

export interface HeaderProps {
}
export const Header = (props: HeaderProps) => {
  return (
    <header className="flex justify-between p-8 text-xl">
      <ul>
        <HeaderItem href="/">
          <span className="font-medium">SamyOS Blog</span>
        </HeaderItem>
      </ul>
      <nav>
        <ul className="gap-8 hidden md:flex">
          <HeaderItem href="/posts">Posts</HeaderItem>
          <HeaderItem href="/news">News</HeaderItem>
          {/* <HeaderItem href="/about">About</HeaderItem> */}
          {/* <HeaderItem href="/author">Author</HeaderItem> */}
        </ul>
      </nav>
    </header>
  );
};
