module.exports = function(eleventy) {
    // copy all static files unchanged
    eleventy.addPassthroughCopy({ 'static': '/' });
    eleventy.addWatchTarget('static');

    // custom formatting functions, in addition to those provided by nunjucks and eleventy
    eleventy.addFilter('second', ([ _first, second ]) => second);

    return {
        // directories to look for page content.
        dir: {
            input: 'pages',
            includes: '../includes',
        },

        // use the nunjucks template library by default
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    }
}