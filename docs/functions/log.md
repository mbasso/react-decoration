## @log

Log name and parameters of the decorated function whenever it is called.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @log
  onChange(e) {
    // this evaluates console.log('Calling function "onChange" with params: ', e)
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
