/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
"use strict";
import {src, dest, task} from "gulp";

import browserify from "browserify";
import sourcemaps from "gulp-sourcemaps";
import minjs from "gulp-terser";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import babel from "babelify";

export const pack = () =>
{
	let bundler = browserify(["./src/fancy-webgl-sparkles.js"], { debug: false }).transform(babel);

	return bundler.bundle()
		.on("error", (err)=>
		{
			console.log(err);
		})
		.pipe(source("fancy-webgl-sparkles.js"))
		.pipe(buffer())
		.pipe(minjs())
		.pipe(dest("./dist"));
};

export const noPixi = () =>
{
	return src("./src/fancy-webgl-sparkles-no-pixi.js")
		.pipe(buffer())
		.pipe(minjs())
		.pipe(dest("./dist"));
};

export const debug = () =>
{
	let bundler = browserify(["./src/fancy-webgl-sparkles.js"], { debug: false }).transform(babel);

	return bundler.bundle()
		.on("error", (err)=>
		{
			console.log(err);
		})
		.pipe(source("fancy-webgl-sparkles-map.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(minjs())
		.pipe(sourcemaps.write())
		.pipe(dest("./dist"));
};

export default
{
	pack,
	debug,
	noPixi
};
