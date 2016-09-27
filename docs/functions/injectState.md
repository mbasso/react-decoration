## @injectState

Injects component's state in the decorated function as first parameter.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @injectState
  checkValue({ value }) {
    return !isNaN(new Date(value));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} {...this.props} />
        {
          !this.checkValue() && (
            Formatting error
          )
        }
      </div>
    );
  }
}
```
