## @extractNativeEvent

Extracts event's `nativeEvent` and passes it as parameter to the decorated function.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @extractNativeEvent
  onChange(nativeEvent) {
    this.setState({
      value: nativeEvent.target.value,
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
