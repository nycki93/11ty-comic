const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    // official plugins
    eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // copy all static files unchanged
    eleventyConfig.addPassthroughCopy({ 'static': '/' });
    eleventyConfig.addWatchTarget('static');

    // custom formatting functions, in addition to those provided by nunjucks and eleventy
    eleventyConfig.addFilter('second', ([ _first, second ]) => second);

    return {
        // directories to look for page content.
        dir: {
            input: 'pages',
            includes: '../includes',
            data: '../data',
        },

        // use the nunjucks template library by default
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    }
}