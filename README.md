# Add Some Glitter And Sparks To Your Web Project!

Unleash the power of the GPU! Use fancy-webgl-sparkles.js to spice up your website with this awesome webgl effect.
![](https://raw.githubusercontent.com/elisamuelps/fancy-webgl-sparkles/master/res/demo.gif)

Please check the demo with the [documentation](https://fancy-webgl-sparkles.netlify.com) to get started.

## What is Fancy WebGl Sparkles?

It's a performance first frontend Javascript library powered by **pixi.js** that allows you to add dynamic glowing sparkles, stars and bokeh to your DOM elements.

## Features
- WebGL rendering
- Fancy glow and post-process shaders
- No coding required, just plug and add markup to your html elements
- Vanilla Javascript (No JQuery)
- Three type of particles available
  - Bokeh
  - Sparkles
  - Stars
- Able to simulate tons of particles
- Fast on mobile
- Customize your own colours
- Built in events
- Able to render sparkles outside of elements with custom boundaries
- Sizing options and multipliers

## Installation

### Npm

```shell
npm i fancy-webgl-sparkles
```

```js
import FancyWebGLSparkles from "fancy-webgl-sparkles"
```

### Web
Download fancy-webgl-sparkles.js from the dist directory and add before the closing body tag
``` html
<script src="./your-path/fancy-webgl-sparkles.js"></script>
```

## Usage
```js
FancyWebGLSparkles.init(document.querySelector("your-selector"), {
      persistent: true,
      renderOutside: false,
      sparkleScale: 250,
      renderBokeh: true,
      bokehSize: 0.4,
      sparkleColor: "rainbow"
    });
```
Please refer to the [documentation](https://fancy-webgl-sparkles.netlify.com) for advanced configuration and interactive examples.

## Contribute
If you wish to contribute feel free to just send a pull request, whether you find a bug or have a feature request feel free to get in 
touch.
