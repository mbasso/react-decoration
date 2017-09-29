## @injectProps

Injects component's props in the decorated function as first parameter.

#### Example

```js
class User extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
  }

  @injectProps
  getFullName({ name, surname }, separator) {
    return `${name}${separator}${surname}`;
  }

  render() {
    return (
      <div>
        {this.getUsername('-')}
      </div>
    );
  }
}
```
