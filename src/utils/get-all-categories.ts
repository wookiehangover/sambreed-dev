import type { CollectionEntry } from "astro:content";
import type { WikiCategory } from "../types/wiki";
import kebabCase from "just-kebab-case";

export default function getAllCategories(wikiEntries: CollectionEntry<"wiki">[]): { tree: WikiCategory[]; map: Map<string, WikiCategory> } {
  const map = new Map<string, WikiCategory>();
  const tree = wikiEntries.reduce((acc, entry) => {
    if (entry.data.categories.length === 0) {
      return acc;
    }
    let root: WikiCategory = {
      label: entry.data.categories[0],
      path: kebabCase(entry.data.categories[0]),
      children: [],
    };
    const existingRoot = acc.find((c) => c.label === entry.data.categories[0]);
    if (existingRoot) {
      root = existingRoot;
    } else {
      map.set(root.path, root)
      map.set(root.label, root)
      acc.push(root);
    }
    let previousRoot;

    for (let index = 1; index < entry.data.categories.length; index++) {
      const label = entry.data.categories[index];

      const parent = previousRoot ? previousRoot : root;

      if (parent.children.find((c) => c.label === label)) {
        continue;
      }

      previousRoot = { label, path: kebabCase(label), children: [] };

      if (parent) {
        map.set(previousRoot.path, previousRoot)
        map.set(previousRoot.label, previousRoot)
        parent.children.push(previousRoot);
      }
    }

    return acc;
  }, [] as WikiCategory[]);

  return { tree, map }
}
