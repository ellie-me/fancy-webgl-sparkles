/*! fancy-webgl-sparkles 1.0.5 | (c) 2021 Eli Menendez | Apache License */
const FancyWebGLSparkles = (() =>
{
	class FancyWebGLSparkles
	{
		constructor(element, inSettings = {})
		{
			if (!(element instanceof Node)) throw "Can't initialize FancyWebGLSparkles because " + element + " is not a Node.";
			this.settings = inSettings;
			this.element = element;
			this.mouseEventElement = null;
			this.pixi = null;
			//This is the spritesheet image as base64, feel free to change the spritesheet with your own sprites.
			//Tip: if you wish to generate your own textures use shoebox or texture packer to package the assets, remember to put pixijs as ouput format and inline your base64 spritesheet and json data below.
			//Frames 0 to 6 are used for the animated sparkles, frames 7, 9 and 10 are used for bokeh and frame 9 is used for the stars
			this.sprites = "data:image/png;base64,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";

			this.spriteSheetData =
			{
				"frames":
				{
					"s1.png":
					{
						"frame": {"x":98, "y":112, "w":37, "h":35},
						"spriteSourceSize": {"x":12,"y":14,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s10.png":
					{
						"frame": {"x":0, "y":112, "w":48, "h":49},
						"spriteSourceSize": {"x":8,"y":8,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s2.png":
					{
						"frame": {"x":49, "y":112, "w":48, "h":41},
						"spriteSourceSize": {"x":8,"y":12,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s3.png":
					{
						"frame": {"x":109, "y":56, "w":52, "h":55},
						"spriteSourceSize": {"x":5,"y":5,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s4.png":
					{
						"frame": {"x":0, "y":0, "w":56, "h":55},
						"spriteSourceSize": {"x":4,"y":5,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s5.png":
					{
						"frame": {"x":55, "y":56, "w":53, "h":55},
						"spriteSourceSize": {"x":5,"y":5,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s6.png":
					{
						"frame": {"x":111, "y":0, "w":37, "h":35},
						"spriteSourceSize": {"x":11,"y":11,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s7.png":
					{
						"frame": {"x":136, "y":112, "w":26, "h":25},
						"spriteSourceSize": {"x":18,"y":19,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s8.png":
					{
						"frame": {"x":0, "y":56, "w":54, "h":54},
						"spriteSourceSize": {"x":5,"y":5,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					},
					"s9.png":
					{
						"frame": {"x":57, "y":0, "w":53, "h":55},
						"spriteSourceSize": {"x":5,"y":5,"w":64,"h":64},
						"sourceSize": {"w":64,"h":64}
					}
				},
				"meta":
				{
					"image": this.sprites,
					"size": {"w": 163, "h": 162},
					"scale": "1"
				}
			};

			for (let property in this.getDefaultSettings())
			{
				let attrSetting = this.element.getAttribute("sparkle-" + property);

				//If this property exists in the user settings, set the object property to that setting, otherwise use the defaults
				if (property in inSettings) this.settings[property] = inSettings[property];

				else if (attrSetting != "" && attrSetting != null)
				{
					try
					{
						this.settings[property] = JSON.parse(attrSetting);
					} catch (e)
					{
						this.settings[property] = attrSetting;
					}
				}
				else this.settings[property] = this.getDefaultSettings()[property];
			}
			this.addEventListeners();
		}

		getDefaultSettings()
		{
			return{
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
				//If set to true allows particles to render outside from the element's bounding box
				renderOutside: true,
				//Array of colors for the bokeh effect
				bokehColor: ["#ffffff","#ffff00"],
				//This scale is proportional to the number of sparkles on the screen to avoid pollution
				bokehScale: 1.5,
				//Size multiplier to scale the bokeh, IE a scale of two means double the size
				bokehSize: .7,
				//This scale is proportional to the number of sparkles on the screen
				starScale: 2,
				//Size multiplier to scale the star particles, IE a scale of two means double the original size
				starSize: 1,
				//Scale of the boundary if renderOutside is set to true, IE a value of 2 would double the size of the area that is being rendered outside of the parent element boundaries.
				boundaryScale: 1,
				//If this setting is true the particles will start rendering as soon as the DOM is generated.
				persistent: false
			};
		}

		//Static Constructor
		static init(elements, settings)
		{
			if (elements instanceof Node) elements = [elements];
			if (elements instanceof NodeList) elements = [].slice.call(elements);
			if (!(elements instanceof Array)) return;

			elements.forEach(element =>
			{
				if (!("FancyWebGLSparkles" in element)) element.FancyWebGLSparkles = new FancyWebGLSparkles(element, settings);
			});
		}

		addEventListeners()
		{
			if(!this.settings.persistent)
			{
				this.element.addEventListener("mouseenter", (e) =>
				{
					this.mouseEventElement = e;
					this.start(e.target);
				});
				this.element.addEventListener("mouseleave", ()=>
				{
					if(this.pixi === null || this.pixi === undefined) return;
					this.pixi.bIsPendingDestroy = true;
				});
				return;
			}
			this.start(this.element);
		}

		//Stop the pixi instance
		stop()
		{
			this.pixi.stop();
			this.pixi.bInstanceHasBeenInitialized = true;
		}

		start(element)
		{
			this.width = this.settings.renderOutside? (this.element.getBoundingClientRect().width * 1.4) * this.settings.boundaryScale: this.element.getBoundingClientRect().width;
			this.height = this.settings.renderOutside? (this.element.getBoundingClientRect().height * 1.4) * this.settings.boundaryScale : this.element.getBoundingClientRect().height;

			if(this.pixi == undefined)
			{
				this.pixi = new PIXI.Application({
					width: this.width, height: this.height, transparent: true, autoDensity: true, clearBeforeRender: true
				});
			}

			if(this.pixi.renderer.context.isLost)
			{
				this.pixi.destroy(true,
					{
						children: true,
						texture: false,
						baseTexture: false
					});
				this.pixi = new PIXI.Application({
					width: this.width, height: this.height, transparent: true, autoDensity: true, clearBeforeRender: true
				});
				this.pixi.bInstanceHasBeenInitialized = undefined;
			}

			//Append the pixi instance on top of the container and center with the help of css
			const pixiNode = element.appendChild(this.pixi.view);
			pixiNode.style.position = "absolute";
			pixiNode.style.left = "50%";
			pixiNode.style.top = "50%";
			pixiNode.style.transform = "translate(-50%, -50%)";

			//Add this property to later allow space for memory management once the particles are not being rendered on the screen
			this.pixi.bIsPendingDestroy = false;

			//We want to avoid any collisions between the canvas and the DOM
			pixiNode.style.pointerEvents = "none";

			//Find the parent and check if there's a stacking context to position the canvas on top of the element and not to the top of the root document, in our case we will set static DOM elements as relative to add the stacking context
			//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
			const parentNode = window.getComputedStyle(element).position;
			if(parentNode === "static") element.style.position = "relative";

			//Add webgl filters
			const filter = new PIXI.filters.AdvancedBloomFilter(.05, 50, 4, 4, 4, null, 1, PIXI.settings.RESOLUTION);
			this.pixi.stage.filters = [filter];
			this.pixi.stage.filterArea = this.pixi.screen;

			//Load texture assets to the vRam cache pool if the cache is empty
			const spritesheetUrl = `data:application/json;base64,${btoa(JSON.stringify(this.spriteSheetData))}`;
			if(Object.keys(PIXI.utils.TextureCache).length === 0)
				this.pixi.loader.add("spritesheet", spritesheetUrl).load(() => this.onTexturesLoaded(false));

			else this.onTexturesLoaded(true);
		}

		//Construct the particles with its initial properties after the pixi instance and its textures have been allocated on memory
		onTexturesLoaded(bTexturesAlreadyOnMemory)
		{
			//If we have lost the context because we have hit webgl limits then we need to create the context again
			if (bTexturesAlreadyOnMemory && this.pixi.bInstanceHasBeenInitialized != undefined)
			{
				this.pixi.start();
				return;
			}

			const textureStore = [];
			const spriteStoreOne = [];
			const spriteStoreTwo = [];
			const spriteStoreThree = [];
			for(let i = 0; i < 10; ++i) textureStore.push(PIXI.Texture.from(`s${i + 1}.png`));
			//FadeIn the particles on creation for a nice smooth effect =)
			this.pixi.stage.alpha = 0;

			// create our sparkle sprite using the datauri supplied in the script
			const particleTypeOne = new PIXI.ParticleContainer(Math.round(this.settings.sparkleScale / 10 * this.settings.bokehScale),{
				scale: true,
				vertices: true,
				position: true,
				rotation: false,
				uvs: true,
				alpha: true
			});

			const particleTypeTwo = new PIXI.ParticleContainer(Math.round(this.settings.sparkleScale),{
				scale: true,
				vertices: true,
				position: true,
				rotation: false,
				uvs: true,
				alpha: true
			});

			const particleTypeThree = new PIXI.ParticleContainer(Math.round(this.settings.sparkleScale / 8 * this.settings.starScale),{
				scale: true,
				vertices: true,
				position: true,
				rotation: true,
				uvs: true,
				alpha: true
			});

			//This intermediate container is created to allow for webgl effects to be applied to the sparkle particles and get this nice glow effect.
			const particleContainerOne = new PIXI.Container();
			particleContainerOne.addChild(particleTypeTwo);

			const theFilter = new PIXI.filters.GlowFilter(10, 1, 0, PIXI.utils.string2hex("#ffffff"), .1);
			particleContainerOne.filters = [theFilter];
			particleContainerOne.filterArea = this.pixi.renderer.screen;

			//Create Bokeh Particles
			for(let i = 0; i < Math.round((this.settings.sparkleScale * 0.10) * this.settings.bokehScale); ++i)
			{
				const bokeh = Math.round(Math.random())? new PIXI.Sprite(textureStore[6]) : new PIXI.Sprite(textureStore[9]);
				bokeh.scale.set((Math.random() * (1.2 * this.settings.bokehSize)) + (0.4 * this.settings.bokehSize));
				bokeh.blendMode = PIXI.BLEND_MODES.OVERLAY;
				bokeh.tint = this.settings.bokehColor === "rainbow"? Math.random() * 0xE8D4CD : PIXI.utils.string2hex(this.settings.bokehColor[Math.floor(Math.random() * this.settings.bokehColor.length)]);
				bokeh.x = Math.random() * this.pixi.screen.width;
				bokeh.y = Math.random() * this.pixi.screen.height;
				bokeh.anchor.set(0.5, 0.5);
				//Initial Fade state, fadeIn = 1, fadeOut = 0
				bokeh.fade = Math.round(Math.random());
				bokeh.alpha = this.clamp(Math.random(), 0.1, 0.7);
				spriteStoreOne.push(bokeh);
				particleTypeOne.addChild(bokeh);
			}

			//Create Sparkle Particles
			for(let i = 0; i < Math.round(this.settings.sparkleScale); ++i)
			{
				const sparkle = PIXI.AnimatedSprite.fromFrames(["s1.png","s2.png", "s3.png", "s4.png", "s5.png", "s6.png", "s7.png"]);
				sparkle.tint = this.settings.sparkleColor === "rainbow"? Math.random() * 0xE8D4CD : PIXI.utils.string2hex(this.settings.sparkleColor[Math.floor(Math.random() * this.settings.sparkleColor.length)]);
				sparkle.x = Math.random() * this.pixi.screen.width;
				sparkle.y = Math.random() * this.pixi.screen.height;
				sparkle.anchor.set(0.5, 0.5);
				sparkle.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;
				sparkle.alpha = this.clamp(Math.random(), 0.3, 1);
				sparkle.fade = Math.round(Math.random());
				sparkle.rotation = Math.random() * Math.PI;
				sparkle.scale.set(this.clamp(Math.random() * this.settings.maxSize, this.settings.minSize, this.settings.maxSize));
				sparkle.gotoAndPlay(Math.floor(Math.random() * 6));
				sparkle.animationSpeed = .18;

				const xDirection = Math.floor(Math.random() * 20) - 10;
				const yDirection = this.settings.direction === "up"? Math.floor(Math.random() * 5) - 5.5 : this.settings.direction === "down"? Math.floor(Math.random() * 5) + .5 : Math.floor(Math.random() * 10) - 5;

				sparkle.direction =
				{
					//Add some randomness to the direction of movement on construction
					x: xDirection,
					y: yDirection
				};
				spriteStoreTwo.push(sparkle);
				particleTypeTwo.addChild(sparkle);
			}

			//Create Star Particles
			for(let i = 0; i < Math.round((this.settings.sparkleScale * .25) * this.settings.starScale); ++i)
			{
				const star = new PIXI.Sprite(textureStore[7]);
				star.tint = PIXI.utils.string2hex("#ffffff");
				star.x = Math.random() * this.pixi.screen.width;
				star.y = Math.random() * this.pixi.screen.height;
				star.anchor.set(0.5, 0.5);
				star.alpha = this.clamp(Math.random(), 0.3, 1);
				star.fade = Math.round(Math.random());
				star.rotation = Math.random() * Math.PI;
				star.zoom = Math.floor(Math.random());
				star.scale.set(this.clamp(Math.random() * this.settings.maxSize * 1.5, this.settings.minSize * 1.5, this.settings.maxSize * 1.5));

				const xDirection = Math.floor(Math.random() * 20) - 10;
				const yDirection = this.settings.direction === "up"? Math.floor(Math.random() * 5) - 5.5 : this.settings.direction === "down"? Math.floor(Math.random() * 5) + .5 : Math.floor(Math.random() * 10) - 5;

				star.direction =
				{
					//Add some randomness to the direction of movement on particle construction
					x: xDirection,
					y: yDirection
				};
				spriteStoreThree.push(star);
				particleTypeThree.addChild(star);
			}

			//Render particles based on user choice
			if(this.settings.renderBokeh) this.pixi.stage.addChild(particleTypeOne);
			if(this.settings.renderSparkles) this.pixi.stage.addChild(particleContainerOne);
			if(this.settings.renderStars) this.pixi.stage.addChild(particleTypeThree);

			//Initialize the update function
			this.pixi.ticker.add(()=>
			{
				this.fadeInCanvas();
				this.fadeOutCanvas();
				if(this.pixi != null && !this.pixi.bIsPendingDestroy) this.update(spriteStoreOne, spriteStoreTwo, spriteStoreThree);
			});
		}

		//simple utility function used to matematically clamp diferent parameters
		clamp(value,min,max) { return value > max ? max : value < min ? min : value; }

		//FadeIn the content when the mouse enters the view
		fadeInCanvas()
		{
			if (this.pixi.stage.alpha >= 1 || this.pixi.bIsPendingDestroy) return;
			this.pixi.stage.alpha = this.clamp(this.pixi.stage.alpha, 0, 1);
			this.pixi.stage.alpha += 0.05 * this.pixi.ticker.deltaTime;
		}

		//FadeOut the content when the mouse gets out of the view before destroying the instance
		fadeOutCanvas()
		{
			if (this.pixi.stage.alpha === 0 && !this.pixi.bIsPendingDestroy) return;
			if (this.pixi.stage.alpha >= 0 && this.pixi.bIsPendingDestroy)
			{
				this.pixi.stage.alpha = this.clamp(this.pixi.stage.alpha, 0, 1);
				this.pixi.stage.alpha -= 0.08 * this.pixi.ticker.deltaTime;
			}
			if(this.pixi.stage.alpha <= 0 && this.pixi.bIsPendingDestroy) this.stop(this.mouseEventElement);
		}

		//Pulse the scale of the particle
		pulseParticle(particle, maxScale = 1.2, minScale = 0)
		{
			const theScale = particle.scale.x;
			//Similar to fading
			// 1 = Zoom In 0 = Zoom Out
			particle.zoom = (theScale >= maxScale && particle.zoom) ? 0 : (theScale <= minScale && !particle.zoom) ? 1 : particle.zoom;

			//zoom in
			if(particle.zoom) particle.scale.set(particle.scale.x + .003 * this.pixi.ticker.deltaTime);
			//zoom out
			if(!particle.zoom) particle.scale.set(particle.scale.x - .003 * this.pixi.ticker.deltaTime);

			//Clamp values to not allow negatives
			particle.scale.x = this.clamp(particle.scale.x, minScale, maxScale);
			particle.scale.y = this.clamp(particle.scale.y, minScale, maxScale);
		}

		//Fade In and out the particle, randomizing its position after it has been faded out
		fadeParticle(particle, maxOpacity = 0.6, newMinimumScale = .4, newMaximumScale = 1.2)
		{
			//Set particle fade state 1 = Fade In 0 = Fade Out
			particle.fade = (particle.alpha >= maxOpacity && particle.fade) ? 0 : (particle.alpha <= 0 && !particle.fade) ? 1 : particle.fade;

			//Fade in
			if(particle.fade) particle.alpha += .003 * this.pixi.ticker.deltaTime;

			//Fade out
			if(!particle.fade) particle.alpha -= .003 * this.pixi.ticker.deltaTime;

			//Clamp values to not allow negatives
			particle.alpha = this.clamp(particle.alpha, 0, maxOpacity);

			//Check if the particle has faded out, change its position
			if(!particle.fade && particle.alpha == 0)
			{
				particle.x = Math.random() * this.pixi.screen.width;
				particle.y = Math.random() * this.pixi.screen.height;
				particle.scale.set((Math.random() * (newMaximumScale - newMinimumScale)) + newMinimumScale);
			}
		}

		// Position particles at the other end of the canvas whenever they hit the bounds of the canvas itself
		// We also avoid clipping by setting a boundary based on the canvas size
		throwParticlesBackToTheCanvas(particle)
		{
			const boundingBox =
			{
				x: this.element.getBoundingClientRect().width,
				y: this.element.getBoundingClientRect().height
			};

			//Prevent clipping by providing an invisible boundary area for particles
			const bounds =
			{
				xMin: () => this.settings.renderOutside? boundingBox.x * 0.1 : 0,
				xMax: () => this.settings.renderOutside? this.width - (boundingBox.x * 0.1) : this.width,
				yMin: () => this.settings.renderOutside? boundingBox.y * 0.1 : 0,
				yMax: () => this.settings.renderOutside? this.height - (boundingBox.y * 0.1) : this.height,
			};

			if(particle.x > bounds.xMax() || particle.x < bounds.xMin() || particle.y > bounds.yMax() || particle.y < bounds.yMin())
			{
				//Resize Particles if they are out of bounds
				particle.scale.set(this.clamp(Math.random() * this.settings.maxSize, this.settings.minSize, this.settings.maxSize));
			}

			if(particle.x > bounds.xMax()) particle.x = this.settings.renderOutside? bounds.xMin : 0;
			if(particle.x < bounds.xMin()) particle.x = this.settings.renderOutside? bounds.xMax : this.width;

			// if the particles have hit the vertical bounds, teleport them to a new X position with the y position inverted
			if(particle.y > bounds.yMax())
			{
				particle.y = this.settings.renderOutside? bounds.yMin : 0;
				particle.x = Math.floor(Math.random() * bounds.xMax);
			}
			if(particle.y < bounds.yMin())
			{
				particle.y = this.settings.renderOutside? bounds.yMax : this.height;
				particle.x = Math.floor(Math.random() * bounds.xMax);
			}
		}

		//Update loop on delta
		update(bokehs, sparkles, stars)
		{
			sparkles.forEach((sparkle) =>
			{
				this.throwParticlesBackToTheCanvas(sparkle);
				this.fadeParticle(sparkle, 1, this.settings.minSize, this.settings.maxSize);

				// Randomly move stars along the direction, we weight x heavier than y,
				// allowing space for random decelleration, giving an ethereal floating feeling
				const speed =
				{
					x: () =>
					{
						const randBool = Math.random() > Math.random() * 2;
						return randBool? this.settings.speed / 20 : 0;
					},
					y: () =>
					{
						const randBool = Math.random() > Math.random() * 5;
						return randBool? this.settings.speed / 10 : this.settings.speed / 15;
					},
				};

				//Perform the position update
				sparkle.x += speed.x() * sparkle.direction.x * this.pixi.ticker.deltaTime;
				sparkle.y += speed.y() * sparkle.direction.y * this.pixi.ticker.deltaTime;
			});

			bokehs.forEach((bokeh)=>
			{
				this.throwParticlesBackToTheCanvas(bokeh);
				this.fadeParticle(bokeh, 0.6, 0.4 * this.settings.bokehSize, 1.2 * this.settings.bokehSize);

				//Move the bokeh particle
				//The scale is going to be pumped on both the x and y axis at the same time, therefore we don't care of discrepancies between both axis to measure the current scale
				let currScale = bokeh.scale.x;
				currScale += 0.001 * this.pixi.ticker.deltaTime;
				bokeh.y -= (Math.random() * 0.2) * this.pixi.ticker.deltaTime;
				bokeh.scale.set(currScale);
			});

			stars.forEach((star)=>
			{
				this.throwParticlesBackToTheCanvas(star);
				this.fadeParticle(star, 1, this.settings.minSize, this.settings.maxSize);

				//Perform the position update
				star.x += (this.settings.speed / 50 * star.direction.x) * this.pixi.ticker.deltaTime;
				star.y += (this.settings.speed / 30 * star.direction.y) * this.pixi.ticker.deltaTime;
				star.rotation += star.direction.y * this.pixi.ticker.deltaTime * Math.PI * .01;
				this.pulseParticle(star, this.settings.maxSize * 1.5, 0.1);
			});
		}
	}

	if (typeof document !== "undefined")
	{
		/* expose the class to window and autoload */
		window.FancyWebGLSparkles = FancyWebGLSparkles;
		FancyWebGLSparkles.init(document.querySelectorAll("[sparkle]"));
	}

	return FancyWebGLSparkles;
})();
