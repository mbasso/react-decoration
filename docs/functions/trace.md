## @trace

Invokes [console.trace](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace) for you, outputs a stack trace to the Web Console.

**N.B.** if you want to support old browsers you have to polyfill that.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @trace
  onChange(e) {
    // invokes console.trace()
    // more information are available here https://developer.mozilla.org/en-US/docs/Web/API/Console/trace
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.onChange}
        {...this.props}
      />
    );
  }
}
```
