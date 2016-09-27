# react-decoration

[![Build Status](https://travis-ci.org/mbasso/react-decoration.svg?branch=master)](https://travis-ci.org/mbasso/react-decoration)
[![npm version](https://img.shields.io/npm/v/react-decoration.svg)](https://www.npmjs.com/package/react-decoration)
[![npm downloads](https://img.shields.io/npm/dm/react-decoration.svg?maxAge=2592000)](https://www.npmjs.com/package/react-decoration)
[![Coverage Status](https://coveralls.io/repos/github/mbasso/react-decoration/badge.svg?branch=master)](https://coveralls.io/github/mbasso/react-decoration?branch=master)
[![Join the chat at https://gitter.im/mbasso/react-decoration](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/react-decoration?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A collection of @decorators for React Components

- - -

**Attention - In order to use react-decoration you have to use babel 5 or use [this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) plugin for babel 6. Check [this](https://github.com/mbasso/react-decoration/blob/master/docs/Introduction.md) page for information.**

- - -

## Installation

You can install react-decoration using [npm](https://www.npmjs.com/package/react-decoration):

```bash
npm install --save react-decoration
```

If you aren't using npm in your project, you can include reactDecoration using UMD build in the dist folder with `<script>` tag.

## Usage

Once you have installed react-decoration, supposing a CommonJS environment, you can import decorators in this way and immediately use them with no configuration.

```js
import React from 'react';
import {
  withStyles,
  autobind,
  killEvent,
  extractValue,
} from 'react-decoration';

@withStyles({
  container: {
    width: '100%',
    height: 'auto',
  },
  input: {
    width: 250,
  },
})
class DateField extends React.Component {

  state = {
    value: 'Hello!'
  }

  @autobind
  checkValue() {
    return !isNaN(new Date(this.state.value));
  }

  @killEvent
  @extractValue
  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    const { styles } = this.props;
    return (
      <div style={styles.container}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.input}
        />
        {
          !this.checkValue() && (
            <p>Formatting error</p>
          )
        }
      </div>
    );
  }
}
```

## Documentation

Visit [docs](https://github.com/mbasso/react-decoration/blob/master/docs) folder to find the complete list of decorators and their usage.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/mbasso/react-decoration/releases) page.

## Authors
**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@Teo_Basso](https://twitter.com/Teo_Basso)

## Copyright and License
Copyright (c) 2016, Matteo Basso.

react-decoration source code is licensed under the [MIT License](https://github.com/mbasso/react-decoration/blob/master/LICENSE.md).
