import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import fs from "fs:promises";
import { globby } from "globby";

const all_links = {};

const processMarkdownFile = async (filePath) => {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const links = [];
    const slug = filePath.replace("./src/content/writing/", "").replace(".mdx", "").replace(".md", "");
    const parser = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(() => (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "a") {
            const url = node.properties.href;
            const title = node.children[0].value;
            if (url.startsWith("http")) {
              links.push({ title, url });
            }
          }
        });
      })
      .use(rehypeStringify);

    parser.processSync(fileContents);

    all_links[slug] = links;
  } catch (error) {
    console.error(`Error processing file ${filePath}: ${error}`);
  }
};

const processDirectory = async (directory) => {
  try {
    const files = await globby(directory);
    for (const file of files) {
      await processMarkdownFile(file);
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}: ${error}`);
  }
};

await processDirectory("./src/content/writing/202*/**/*link*.md*");
await fs.writeFile("./src/data/links.json", JSON.stringify(all_links), "utf-8");
console.log(
  `Extracted ${Object.values(all_links).reduce((acc, links) => acc + links.length, 0)} links from ${
    Object.keys(all_links).length
  } files`
);
