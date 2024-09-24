const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    // these two plugins are used in the RSS feed
    eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // copy these files even though they're not templates
    eleventyConfig.addPassthroughCopy('pages/**/*.css');
    eleventyConfig.addPassthroughCopy('pages/img/*');

    return {
        // directories to look for page content.
        dir: {
            input: 'site-root',
            includes: '../site-includes',
            data: '../site-data',
        }
    }
}