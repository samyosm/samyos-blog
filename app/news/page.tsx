import { allNews } from "@/.contentlayer/generated";
import { Display } from "@/components/Display";
import { BasicArticle } from "@/components/DisplayArticle";
import { sortDocument } from "@/utils/sort";

export default function Home() {
  return (
    <Display label="News">
      {allNews.sort(sortDocument).map((t) => (
        <BasicArticle
          key={t.url}
          document={t}
        />
      ))}
    </Display>
  );
}
