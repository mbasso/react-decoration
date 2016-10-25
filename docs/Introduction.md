## Introduction

As we said in [README](https://github.com/mbasso/react-decoration/blob/master/README.md) file, in order to use [react-decoration](https://github.com/mbasso/react-decoration) you have to use babel 5 or [this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin for babel 6. This allows you to compile decorators in the right way, so you can use them.
Note that this is not an official babel plugin but, as we can see [here](http://babeljs.io/docs/plugins/transform-decorators/) this is the only way to parse decorators at the moment:

> Decorators are disabled in Babel v6, pending a proposal update – see [babel/babel#2645](https://github.com/babel/babel/issues/2645).
> 
> Until Babel officially supports decorators again, you might want to try the third-party [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin, or use Babel v5.

Here is a quick installation guide from [transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy):

> ## Installation & Usage
> 
> ```bash
> npm install --save-dev babel-plugin-transform-decorators-legacy
> ```
>     
> Add the following line to your .babelrc file:
> 
> ```js
> {
>   "plugins": ["transform-decorators-legacy"]
> }
> ```
>     
> #### NOTE: Order of Plugins Matters!
> If you are including your plugins manually and using `transform-class-properties`, make sure that `transform-decorators-legacy` comes *before* `transform-class-properties`.
> 
> ```js
> /// WRONG
> 
> "plugins": [
>   "transform-class-properties",
>   "transform-decorators-legacy"
> ]
> 
> // RIGHT
> 
> "plugins": [
>   "transform-decorators-legacy",
>   "transform-class-properties"
> ]
> ```

Subsequently to this, you should read [this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy#best-effort) 
specification. In this way you will be able to avoid a series of problems that can take a lot of time to resolve.

Please note also that react-decoration does not include polyfill, so, if you want to support old browsers, you have to emulate `Object.setPrototypeOf` and `Object.assign`.