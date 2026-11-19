eleventyConfig.addPassthroughCopy("_src/_includes/");
eleventyConfig.addPassthroughCopy("./_src/css/");

module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "_src",
      output: "_site",
    },
  };
};
