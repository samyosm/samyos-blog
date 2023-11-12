export const fileNameToSlug = (fileName: string) => {
  return fileName.slice(0, fileName.length - 3);
};

export const slugToFileName = (slug: string) => {
  return slug + ".md";
};
