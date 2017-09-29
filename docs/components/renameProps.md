## @renameProps(config: Object)

Renames props to inject into the decorated component.
@renameProps parameter is an object defined as follow:
- property name: represents the original name of a prop.
- property value: represents the new name of a prop.

#### Example

```js
@renameProps({
  foo: 'bar',
})
class Foo extends React.Component {

  static propTypes = {
    bar: PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.bar}
      </div>
    );
  }
}

// Rendering the following
// <Foo foo="example" />
//
// produces these props:
// props = {
//   bar: 'example',
// }
```
