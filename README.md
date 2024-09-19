# 11ty-comic

A minimal template for making a webcomic on a static website. Uses the [Eleventy](https://www.11ty.dev) engine.

By nycki, 2024.

## Installing

- Download this code. if you're on github it's under Code -> Download ZIP.
- Install [**Node.js**](https://nodejs.org/en/download/prebuilt-installer/current). This should also install **npm**.
- Open a command prompt and navigate to this folder.
- Type `npm install`. This will download and install the Eleventy engine.

## Usage

- In your command prompt, type `npm run start`. This will run the "start" script in _package.json_, which will compile the website and host it on <http://localhost:8080>.
- Edit the code with the text editor of your choice! Changes should appear automatically. If they don't, go back to the command prompt, and type Ctrl-C to stop the program, then `npm run start` to start it again.
- When you're done making changes, stop the program and type `npm run build` to generate a finished copy of the website. It will appear in the _\_site_ folder.
- Upload the contents of _\_site_ to the static file host of your choice!

## Notes

- The sample pages use Markdown format, but you can use HTML instead if you prefer. Just make sure to keep the part at the top between the dashed lines. This is called "yaml frontmatter" and it supplies information to the page templates.
- Everything in the _static_ folder will be copied into your website. I'm using the _/a_ folder for images and attachments, but you can name it whatever you like.
- GNU Eggbug!
