import { DocumentTypes } from "contentlayer/generated";
import moment from "moment";
import Image from "next/image";

export interface ArticleMarkdownProps {
  document: DocumentTypes;
}

export const ArticleMarkdown = ({ document }: ArticleMarkdownProps) => {
  return (
    <article className="mx-auto max-w-xl py-8">
      <Image
        alt={document.image.alt}
        src={require(`@/images/${document.image.src}`).default}
      />
      <div className="mb-8 text-center">
        <time dateTime={document.date} className="mb-1 text-xs text-gray-600">
          {moment(document.date, "YYYY-MM-DD").format("Do MMMM YYYY")}
        </time>
        <h1 className="text-3xl font-bold">{document.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 prose"
        dangerouslySetInnerHTML={{ __html: document.body.html }}
      />
    </article>
  );
};
