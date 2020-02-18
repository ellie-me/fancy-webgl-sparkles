# ADD SOME MAGIC TO YOUR WEB PROJECT!
Unleash the power of the GPU! Use fancy-webgl-sparkles.js to spice up your website with this awesome webgl effect.

Please read the [documentation](/getting-started/introduction) to get started.

<div class="fairies">
	<a href="https://www.deviantart.com/t1na/art/Fairy-tale-542430962">
		<img src="./res/fairy-tale.jpg" style="min-height: 450px">
	</a>
</div>

<script>
	FancyWebGLSparkles.init(document.querySelector(".fairies"),
	{
		persistent: true,
		renderStars: true,
		renderOutside: false,
		sparkleColor: ["#facb60","#ba554d","#cfbb6a", "#ffffff"],
		sparkleScale: 160,
		renderBokeh: true,
		bokehColor: ["#facb60","#ba554d","#cfbb6a"]
	});
</script>