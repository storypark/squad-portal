require('dotenv').config();
//console.log(process.env.GITHUB_TOKEN);
const formatDistance = require('date-fns/formatDistance');
const format = require('date-fns/format');
const parseISO = require('date-fns/parseISO');
const Image = require("@11ty/eleventy-img");
const USERS = require('./_data/users'); // TODO: better way to load this?

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy({ public: '/' });

  eleventyConfig.addFilter('debug', function(input) {
    return JSON.stringify(input, null, 2);
  });

  eleventyConfig.addFilter('timedist', function(input) {
    if (!input) { return ''; }

    return formatDistance(parseISO(input), new Date)
  });

  eleventyConfig.addFilter('shortDate', function(input) {
    if (!input) { return ''; }

    return format(parseISO(input), 'MMM d');
  });

  eleventyConfig.addFilter('nickname', function(githubLogin) {
    return USERS.find(u => u.githubLogin === githubLogin)?.nickname || githubLogin;
  });

  eleventyConfig.addNunjucksAsyncShortcode('avatar', async function(userName) {
    if (!userName) { return ''; }

    // input.avatar is the URL of their github avatar, but those are kinda boring?
    const avatarUrl = `https://avatars.dicebear.com/api/bottts/${userName}.svg`;

    const metadata = await Image(avatarUrl, {
      widths: [80],
      formats: ['png'],
      outputDir: './_site/img/',
    });

    const imageAttributes = {
      alt: `Avatar of ${userName}`,
      title: userName,
      sizes: [40],
      loading: 'lazy',
      decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    passthroughFileCopy: true,
  }
}
