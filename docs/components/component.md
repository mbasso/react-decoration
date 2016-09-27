## @component

Extends [React.Component](https://facebook.github.io/react/docs/component-api.html#react.component) for you.

#### Example

```js
@component
class TextField {

  render() {
    return (
      <input type="text" {...this.props} />
    );
  }
}
```
