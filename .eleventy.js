module.exports = function(eleventyConfig) {
  // eleventyConfig.addPassthroughCopy('./src/css/')
  // eleventyConfig.addWatchTarget('./src/css/')
  eleventyConfig.setBrowserSyncConfig({
		files: './public/css/**/*.css'
	});
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
  
}