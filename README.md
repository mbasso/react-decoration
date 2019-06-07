# react-decoration

[![Build
Status](https://travis-ci.org/mbasso/react-decoration.svg?branch=master)](https://travis-ci.org/mbasso/react-decoration)
[![npm
version](https://img.shields.io/npm/v/react-decoration.svg)](https://www.npmjs.com/package/react-decoration)
[![npm
downloads](https://img.shields.io/npm/dm/react-decoration.svg?maxAge=2592000)](https://www.npmjs.com/package/react-decoration)
[![Coverage
Status](https://coveralls.io/repos/github/mbasso/react-decoration/badge.svg?branch=master)](https://coveralls.io/github/mbasso/react-decoration?branch=master)
[![Join the chat at
https://gitter.im/mbasso/react-decoration](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mbasso/react-decoration?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> A collection of @decorators for React Components

- - -

**Attention - In order to use react-decoration you have to use babel 5
or use
[this](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
plugin for babel 6. Check
[this](https://github.com/mbasso/react-decoration/blob/master/docs/Introduction.md)
page for information.**

- - -

## Installation

You can install react-decoration using [npm](https://www.npmjs.com/package/react-decoration):

```bash
npm install --save react-decoration
```

If you aren't using npm in your project, you can include
reactDecoration using UMD build in the dist folder with `<script>`
tag.

## Usage

Once you have installed react-decoration, supposing a CommonJS
environment, you can import decorators in this way and immediately use
them with no configuration.

```js
import React from 'react';
import { getItems } from './utils';
import { AutoComplete } from './components';
import {
  withStyles,
  debounce,
  killEvent,
  handleRenderError,
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
@handleRenderError((ex) => <div className="danger">{ex.message}<div>)
class SampleForm extends React.Component {

  state = {
    value: 'Hello!',
    items: [],
  }

  @debounce(500)
  handleChange(e) {
    getItems().then((response) => {
      this.setState({
        value: this.state.value,
        items: response.data.items,
      });
    });

    this.setState({
      value: e.target.value,
      items: this.state.items,
    });
  }

  @killEvent
  handleSubmit() {
    // default prevented
    // propagation stopped

    alert(`AutoComplete value is: ${this.state.value}`);
  }

  render() {
    const { styles } = this.props;
    return (
      <div style={styles.container}>
        <AutoComplete
          value={this.state.value}
          items={this.state.items}
          onChange={this.handleChange}
          style={styles.input}
        />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
```

## Documentation

Visit
[docs](https://github.com/mbasso/react-decoration/blob/master/docs)
folder to find the complete list of decorators and their usage.

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every upstream release, along with the migration instructions, is
documented on the Github
[Releases](https://github.com/mbasso/react-decoration/releases) page.

## Authors

**Matteo Basso**
- [github/mbasso](https://github.com/mbasso)
- [@Teo_Basso](https://twitter.com/Teo_Basso)

**Ashley Lake**
- [gitlab/lake_effect](https://gitlab.com/lake_effect)
- [Ashley Lake](ashelake@protonmail.com)

## Copyright and License

Copyright (c) 2016, Matteo Basso.

react-decoration source code is licensed under the [MIT
License](https://github.com/mbasso/react-decoration/blob/master/LICENSE.md).
