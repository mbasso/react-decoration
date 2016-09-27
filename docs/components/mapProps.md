## @mapProps(callback: function)

Defines a middleware that take props, process them and return new props to the decorated component.

#### Example

```js
@mapProps((props) => {
  const newProps = Object.assign({}, props);
  newProps.fullName = `${newProps.name} ${newProps.surname}`;
  Object.keys(newProps).forEach((key) => {
    newProps[key] += '.';
  });
  return newProps;
})
class User extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    surname: React.PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.fullName}
      </div>
    );
  }
}

// Rendering the following
// <User name="Matteo" surname="Basso" />
//
// produces these props:
// props = {
//   name: 'Matteo.',
//   surname: 'Basso.',
//   fullName: 'Matteo Basso.',
// }
```
