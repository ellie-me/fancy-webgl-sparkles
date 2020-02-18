# Example Usage

## Basic hover sparkles

``` html
<a class="s" sparkle href="#">OMG A Shiny Button :O </a>
```

<a class="s" sparkle href="#" style="background: #022b4d; padding: 10px; box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.2);">OMG A Shiny Button :O </a>

## Enable/disable particles

``` html
<a class="s" sparkle sparkle-renderSparkles="false" href="#">I hate sparkles but I enjoy Stars More</a>
<a class="s" sparkle sparkle-renderStars="false" href="#">Who Needs Those Demn Stars Wars Anyways? I Glow In The Dark</a>
```

<a class="spark-btn b" sparkle sparkle-renderSparkles="false" href="#">I hate sparkles but I enjoy Stars More</a>
<a class="spark-btn c" sparkle sparkle-renderStars="false" href="#">Who Needs Those Demn Stars Wars Anyways? I Glow In The Dark</a>

## Custom colours
```html
<a class="s" sparkle sparkle-renderStars="false" sparkle-sparkleColor='["#ffff00"]' href="#">Please, just yellow</a>
<a class="s" sparkle sparkle-renderStars="false" sparkle-sparkleColor="rainbow" href="#">I Love Rainbows!</a>
```
<a class="spark-btn yellow" sparkle href="#">Please, just yellow</a>
<a class="spark-btn e" sparkle href="#">I Love Rainbows!</a>

## I said **MOARRR** sparkles
```html
<div class="box" sparkle sparkle-renderOutside="false" sparkle-sparkleColor="rainbow" sparkle-sparkleScale=80></div>
<div class="box" sparkle sparkle-renderOutside="false" sparkle-persistent="true" sparkle-sparkleColor="rainbow" sparkle-sparkleScale=300></div>
```
<div class="box nonpersistent" sparkle ></div>
<div class="box persistent" sparkle></div>

## Unleash the combined power of magic sparkles
```html
<div class="magic"
	sparkle
	sparkle-persistent="false"
	sparkle-renderStars="false"
	sparkle-renderOutside="false"
	sparkle-sparkleColor='["#facb60","#ba554d","#cfbb6a", "#ffffff", "#385573"]'
	sparkle-sparkleScale=400
	sparkle-renderBokeh="true"
	sparkle-bokehColor='["#facb60","#ba554d","#cfbb6a"]'
	>
	<a href="https://www.deviantart.com/annewipf/art/Magic-590989994">
		<img src="./res/magic.jpg">
	</a>
</div>
```

<div class="magic"
	sparkle
	sparkle-persistent="false"
	sparkle-renderStars="false"
	sparkle-renderOutside="false"
	sparkle-sparkleColor='["#facb60","#ba554d","#cfbb6a", "#ffffff", "#385573"]'
	sparkle-sparkleScale=400
	sparkle-renderBokeh="true"
	sparkle-bokehColor='["#facb60","#ba554d","#cfbb6a"]'
	>
	<a href="https://www.deviantart.com/annewipf/art/Magic-590989994">
		<img src="./res/magic.jpg">
	</a>
</div>

<style>
	.spark-btn
	{
		background: #022b4d;
		padding: 10px;
		margin:10px;
		box-shadow: 4px 4px 2px 0px rgba(0,0,0,0.2)
	}
	.b
	{
		margin: 10px 10px 10px 0;
	}
	.d
	{
		margin: 10px 10px 10px 0;
	}
	.box
	{
		height: 250px;
		background: #000;
		margin: 10px 0 10px 0;
	}
</style>
<script>
	FancyWebGLSparkles.init(document.querySelector(".s"));

	FancyWebGLSparkles.init(document.querySelector(".b"),
	{
		renderSparkles: false,
	});
	FancyWebGLSparkles.init(document.querySelector(".c"),
	{
		renderStars: false
	});
	FancyWebGLSparkles.init(document.querySelector(".yellow"),
	{
		renderStars: false,
		sparkleColor: ["#ffff00"]
	});
	FancyWebGLSparkles.init(document.querySelector(".e"),
	{
		renderStars: false,
		sparkleColor: "rainbow",
	});
	FancyWebGLSparkles.init(document.querySelector(".e"),
	{
		renderStars: false,
		sparkleColor: "rainbow",
	});
	FancyWebGLSparkles.init(document.querySelector(".nonpersistent"),
	{
		renderOutside: false,
		sparkleColor: "rainbow",
		sparkleScale: 80
	});
	FancyWebGLSparkles.init(document.querySelector(".persistent"),
	{
		persistent: true,
		renderOutside: false,
		sparkleColor: "rainbow",
		sparkleScale: 300
	});
	FancyWebGLSparkles.init(document.querySelector(".magic"),
	{
		persistent: false,
		renderStars: false,
		renderOutside: false,
		sparkleColor: ["#facb60","#ba554d","#cfbb6a", "#ffffff", "#385573"],
		sparkleScale: 400,
		renderBokeh: true,
		bokehColor: ["#facb60","#ba554d","#cfbb6a"]
	});
</script>