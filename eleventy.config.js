const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    // these two plugins provide extra functions that are used in the RSS
    // feed generator.
    eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // by default, 11ty will only output stuff generated from a template,
    // which is a .md or .njk file.
    // we also want it to output our css file and any images we include.
    eleventyConfig.addPassthroughCopy('site-root/**/*.css');
    eleventyConfig.addPassthroughCopy('site-root/img/*');

    return {
        // the input directory is relative to this file.
        // all other directories are relative to the input directory.
        dir: {
            input: 'site-root',
            includes: '../site-includes',
            data: '../site-data',
        },

        // 11ty uses the "liquid" template engine by default, but we're
        // using templates written in "nunjucks".
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
}
