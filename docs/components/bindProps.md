## @bindProps(props: Object)

Bind the given props to the decorated component.

#### Example

```js
@bindProps({
  foo: 'bar',
})
class Foo extends React.Component {

  static contextTypes = {
    foo: PropTypes.string,
  }

  static defaultProps = {
    foo: 'lorem ipsum dolor...',
  }

  render() {
    return (
      <div>
        {/* this is equal to 'bar' */}
        {this.props.foo}
      </div>
    );
  }
}
```
