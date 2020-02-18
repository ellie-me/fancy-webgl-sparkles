# FAQ

<Note type="danger">

Abusing this library by adding more than 16 different sparkle instances to your DOM can cause some mobile browsers to crash.
</Note>
## Will this library slow down/blown up my website?
As long as you're not going crazy with the sparkles (10000+ particleCount) you're more than fine! most modern hardware supports webGL and it means you can always rely on speedy GPU 60fps+ particles.

## What are the limits?
For performance reasons, browsers put a hard limit of 16 WebGL contexts running at the same time, it means that you will get a console warning if you're trying to use this plugin with more than 16 elements in your current page (be careful with SPAs), even though I've managed to manage the memory in a way that when a webGL session crashes you don't get any nasty side effects.

## Can I use my own sprites/textures?
Yes you can, however, you will have to use your own custom build from source for the time being before I release the version 1.1+

The library accepts a standard spritesheet with 9 frames in Json format and an image in Base64, you can use tools like TexturePacker or Shoebox to package your assets, I'm using pngquant to further trim down the size of the png file, for reference you can find in the **res** folder the original files before being embeded into the source code, remember to select pixijs as ouput format on TexturePacker or ShoeBox.

As a general guideline, the frames used to generate the particles are enumerated in order as follows:

- Frames 0 to 6 are used for the animated sparkles.
- Frame 7, 8 and 10 is used for Bokeh textures.
- Frame 9 is used for the Stars.

## What I do if I'm already using Pixi.js on my project?
If you are already using pixi.js you can use a precompiled no dependency build located in the **dist** folder without the pixi.js, although you will have to make sure you're including @pixi/filters or you're whole project is going to crash.

## What is the browser support?
Basically whatever pixi 5 supports on webGL mode, you can read more [here](https://github.com/pixijs/pixi.js/wiki/FAQs)