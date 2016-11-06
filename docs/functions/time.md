## @time(label: string)

Invokes [console.time](https://developer.mozilla.org/en-US/docs/Web/API/Console/time) and [console.timeEnd](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd) before and after the execution of the decorated function.
This tracks how long the decorated function takes, logging it in the Web Console.

**N.B.** if you want to support old browsers you have to polyfill that.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @time('input has changed')
  onChange(e) {
    // invokes console.time('input has changed')
    this.setState({
      value: e.target.value,
    });
    // invokes console.timeEnd('input has changed')
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
