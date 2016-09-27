## @pureComponent

Extends [React.PureComponent](https://github.com/facebook/react/pull/7195) for you.

#### Example

```js
@pureComponent
class TextField {

  render() {
    return (
      <input type="text" {...this.props} />
    );
  }
}
```
