## @autobind

A class or method decorator which binds methods to the instance so this is always correct, even when the method is detached.
This decorator represents a dependency: [autobind-decorator](https://github.com/andreypopp/autobind-decorator)

#### Example

```js
class Button extends React.Component {

  state = {
    clicked = false,
  }

  @autobind
  onClick() {
    // "this" is now defined here
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <button onClick={this.onClick} />
    );
  }
}
```
