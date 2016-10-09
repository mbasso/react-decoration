## @extractTarget

Extracts event's `target` and passes it as parameter to the decorated function.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @extractTarget
  onChange(target) {
    this.setState({
      value: target.value,
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
