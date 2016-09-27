## Introduction

As we said in [README](https://github.com/mbasso/react-decoration/blob/master/README.md) file, in order to use react-decoration you have to use babel 5 or [this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin for babel 6. This allows you to compile decorators in the right way, so you can use them.

Subsequently to this, you should read [this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy#best-effort) specification. In this way you will be able to avoid a series of problems that can take a lot of time to resolve.

Please note that react-decoration does not include polyfill, so, if you want to support old browsers, you have to emulate `Object.setPrototypeOf` and `Object.assign`.
