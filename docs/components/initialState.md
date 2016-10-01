## @initialState(state: Object)

Defines component's [initialState](https://facebook.github.io/react/docs/component-specs.html#getinitialstate).

#### Example

```js
@initialState({
  foo: 'bar',
})
class TextField extends React.Component {

  render() {
    return (
      <input type="text" value={this.state.foo} {...this.props} />
    );
  }
}
```
