## @extractCurrentTarget

Extracts event's `currentTarget` and passes it as parameter to the decorated function.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @extractCurrentTarget
  onChange(currentTarget) {
    this.setState({
      value: currentTarget.value,
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
