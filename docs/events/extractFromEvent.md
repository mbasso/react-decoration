## @extractFromEvent(attribute: string)

Creates a new decorator that extracts the specified attribute from an event and passes it as parameter to the decorated function.

#### Example

```js
const extractTarget = extractFromEvent('target');

class TextField extends React.Component {

  state = {
    value: '',
  }

  @extractTarget // or directly @extractFromEvent('target')
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
