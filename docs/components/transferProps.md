## @transferProps

Aggregates props that are not specified in `propTypes` inside `others` prop.

#### Example

```js
@transferProps
class Foo extends React.Component {

  static propTypes = {
    foo: PropTypes.string,
  }

  render() {
    return (
      <div {...this.props.others}>
        {this.props.foo}
      </div>
    );
  }
}

// Rendering the following
// <Foo foo="foo" bar="bar" />
//
// produces these props:
// props = {
//   foo: 'foo',
//   others: {
//     bar: 'bar',
//   }
// }
```
