## @extractDataset

Extracts event's `dataset` and passes it as parameter to the decorated function.

#### Example

```js
class Button extends React.Component {

  state = {
    foo: '',
  }

  @extractDataset
  onClick(dataset) {
    this.setState({
      foo: dataset.foo,
    });
  }

  render() {
    return (
      <button
        data-foo="bar"
        onClick={this.onClick}
        {...this.props}
      />
    );
  }
}
```
