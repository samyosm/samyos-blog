import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import { DocumentTypes } from "./.contentlayer/generated";

export const NestedImage = defineNestedType(() => ({
  name: "Image",
  fields: {
    src: { type: "string", required: true },
    alt: { type: "string", required: true },
  },
}));

const defineBasicDocument = () => ({
  fields: {
    title: { type: "string", required: true },
    preview: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "nested", of: NestedImage, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (document: DocumentTypes) => `/${document._raw.flattenedPath}`,
    },
    authors: {
      type: "list",
      resolve: () => ["Samy Osmium"],
    },
  },
});

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  ...defineBasicDocument() as any,
}));

export const News = defineDocumentType(() => ({
  name: "News",
  filePathPattern: `news/*.md`,
  ...defineBasicDocument() as any,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, News],
});
