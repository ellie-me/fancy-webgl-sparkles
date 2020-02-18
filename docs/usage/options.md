# Options

## Javascript
You can pass your options as a standard JSON object, list of available parameters are as follows:
```js
//colors to use for the sparkles
sparkleColor: ["#ffffff","#ffff00", "#e15ecb", "#32e187"],
//Rendering controls allow you to enable or disable bokeh, sparkles or stars
renderBokeh: false,
renderSparkles: true,
renderStars: true,
//sparkle particle count
sparkleScale: 50,
//simulation speed
speed: 2,
//minimum particle size
minSize: .05,
//maximum particle size
maxSize: .16,
//direction of sparkle particles, you can use up, down or both
direction: "both",
//If set to true allows particles to render
//outside from the element's bounding box
renderOutside: true,
//Array of colors for the bokeh effect
bokehColor: ["#ffffff","#ffff00"],
//This scale is proportional to the number of
//sparkles on the screen to avoid pollution
bokehScale: 1.5,
//Size multiplier to scale the bokeh, IE a scale of
//two means double the size
bokehSize: .7,
//This scale is proportional to the number of sparkles on the screen
starScale: 2,
//Size multiplier to scale the star particles,
//IE a scale of two means double the original size
starSize: 1,
//Scale of the boundary if renderOutside is set to true,
//IE a value of 2 would double the size of the area
//that is being rendered outside of the parent element boundaries.
boundaryScale: 1,
//If this setting is true the particles will
//start rendering as soon as the DOM is generated.
persistent: false
```

## HTML
Use any combination of the properties above with the prefix sparkle-
```html
<div sparkle sparkle-renderBokeh="true" sparkle-starSize="0.3"></div>
```