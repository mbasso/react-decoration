## @computedProps(props: Object)

Defines computed props to inject into the decorated component.
@computedProps parameter is an object defined as follow:
- property name: represents the name of the prop to inject.
- property value: a function that takes the props and returns the computed one.

#### Example

```js
@computedProps({
  fullName: ({ name, surname }) => `${name} ${surname}`,
})
class User extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
  }

  static defaultProps = {
    name: 'Matteo',
    surname: 'Basso',
  }

  render() {
    return (
      <div>
        {/* fullName is equal to 'Matteo Basso' */}
        {this.props.fullName}
      </div>
    );
  }
}
```
