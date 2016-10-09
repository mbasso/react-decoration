## @extractValue

Extracts event's `value` and passes it as parameter to the decorated function.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @extractValue
  onChange(value) {
    this.setState({
      value,
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
