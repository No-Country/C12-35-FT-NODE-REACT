import { generateSlug } from "random-word-slugs";

export function generateAlias() {
  const slug = generateSlug(4, { format: "lower" });
  const alias = slug.replace(/\s/g, ".");
  return alias;
}
