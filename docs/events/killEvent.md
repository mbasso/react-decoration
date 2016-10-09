## @killEvent

Executes [event.stopPropagation()](https://developer.mozilla.org/it/docs/Web/API/Event/stopPropagation) and [event.preventDefault()](https://developer.mozilla.org/it/docs/Web/API/Event/preventDefault) for you.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @killEvent
  onChange(e) {
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
