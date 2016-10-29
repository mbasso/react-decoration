## @hoc(HOC: function [, ...params])

Applies an Higher Order Component (HOC) to the given component.
Its behavior is based on the given parameters, for example:

- `@hoc(injectIntl)` is the equivalent of `injectIntl(component)`
- `@hoc(connect, ...yourParams)` is the equivalent of `connect(...params)(component)`

#### Example

```js
@hoc(yourHoc)
class TextField extends React.Component {

  render() {
    return (
      <input type="text" {...this.props} />
    );
  }
}

@hoc(yourHoc, ...yourParams)
class TextField extends React.Component {

  render() {
    return (
      <input type="text" {...this.props} />
    );
  }
}
```
