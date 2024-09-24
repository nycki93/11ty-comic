# 11ty-comic

A minimal template for making a webcomic on a static website. Uses the [Eleventy](https://www.11ty.dev) engine. Heavily based on [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog).

By nycki, 2024.

## Installing

- Download this code. if you're on github it's under Code -> Download ZIP.
- Install [**Node.js**](https://nodejs.org/en/download/prebuilt-installer/current). This should also install **npm**.
- Open a command prompt and navigate to this folder.
- Type `npm install`. This will download and install the Eleventy engine. Warnings at this stage are fine as long as long as you see "found 0 vulnerabilities" at the bottom.

## Usage

- In your command prompt, type `npm run start`. This will run the "start" script in _package.json_, which will compile the website and host it on <http://localhost:8080>.
- Edit the code with the text editor of your choice! The comic pages are under _site-root/comic_.
- Changes should appear automatically. If they don't, go back to the command prompt, and type Ctrl-C to stop the program, then `npm run start` to start it again.
- When you're done making changes, stop the program and type `npm run build` to generate a finished copy of the website. It will appear in the _\_site_ folder.
- Upload the contents of _\_site_ to the static file host of your choice!

## Notes

- The sample pages use Markdown format, but you can use HTML instead if you prefer. Just make sure to keep the part at the top between the dashed lines. This is called "yaml frontmatter" and it supplies information to the page templates.
- The _site-includes_ files won't be built into pages themselves, but they can be referenced by other pages. For instance, the header goes in here because it isn't its own page, it's just used as part of other pages.
- GNU Eggbug!
