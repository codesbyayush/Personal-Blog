import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    author: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },

    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },

    toc: {
      type: "json",
      resolve: async (doc) => {
        const regEx = /\n(?<flag>#{1,6})\s+(?<content>.+)/g ;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regEx)).map(({groups}) => {
            const flag = groups?.flag;
          const content = groups?.content;

            return {
              text: content,
              slug: content ? slugger.slug(content) : undefined,
              level:
                flag?.length === 1
                  ? "one"
                  : flag?.length === 2
                  ? "two"
                  : "three",
            }
          }
        );
        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behaviour: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
