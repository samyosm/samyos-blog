import { DocumentTypes } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export interface BasicArticleProps {
  document: DocumentTypes;
}

export const BasicArticle = (props: BasicArticleProps) => {
  return (
    <article className="overflow-hidden w-full">
      <Link href={props.document.url} className="space-y-4">
        <div className="relative aspect-video rounded-md">
          <Image
            className="rounded-md"
            src={require(`@/images/${props.document.image.src}`).default}
            fill
            alt={props.document.image.alt}
          />
        </div>
        <h2 className="font-medium text-xl">
          {props.document.title}
        </h2>
      </Link>
    </article>
  );
};
