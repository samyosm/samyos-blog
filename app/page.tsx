import {
  allDocuments,
  allNews,
  allPosts,
  DocumentTypes,
} from "@/.contentlayer/generated";
import { Display } from "@/components/Display";
import { BasicArticle } from "@/components/DisplayArticle";
import { sortDocument } from "@/utils/sort";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <h1 className="font-medium text-3xl md:text-4xl">Spotlight</h1>
        <SpotlightArticle />
      </div>

      <Display label="News" href="/news">
        {allNews.sort(sortDocument).slice(0, 3).map((t) => (
          <BasicArticle
            key={t.url}
            document={t}
          />
        ))}
      </Display>

      <Display label="Posts" href="/posts">
        {allPosts.sort(sortDocument).slice(0, 3).map((t) => (
          <BasicArticle
            key={t.url}
            document={t}
          />
        ))}
      </Display>
    </>
  );
}

const SpotlightArticle = () => {
  const article = allDocuments.sort(sortDocument)[0];
  return (
    <Link href={article.url} className="block">
      <article className="flex gap-8 flex-col md:flex-row">
        <div className="relative w-full flex-[1.2] aspect-video rounded-md">
          <Image
            className="rounded-md"
            src={require(`@/images/${article.image.src}`).default}
            fill
            alt={article.image.alt}
          />
        </div>

        <div className="w-full h-full flex-1 flex flex-col gap-8">
          <h2 className="font-medium text-xl md:text-2xl">
            {article.title}
          </h2>
          <p className="line-clamp-5">
            {article.preview}
          </p>
        </div>
      </article>
    </Link>
  );
};
