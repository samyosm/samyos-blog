import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { fileNameToSlug, slugToFileName } from "@/utils/slugpath";
import { allNews as allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: fileNameToSlug(post._raw.sourceFileName) }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) =>
    post._raw.sourceFileName === slugToFileName(params.slug)
  );

  if (!post) {
    throw new Error(
      `Post not found for slug while generating metadata: ${params.slug}`,
    );
  }
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) =>
    post._raw.sourceFileName === slugToFileName(params.slug)
  );

  if (!post) {
    throw new Error(`Post not found for slug while layouing: ${params.slug}`);
  }

  return <ArticleMarkdown document={post} />;
};

export default PostLayout;
