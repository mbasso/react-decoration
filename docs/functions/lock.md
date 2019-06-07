## @lock

Executes the decorated function as soon as you call it for the first
time, and then disables further execution.

#### Example

```js
class Button extends React.Component {

  @lock
  onClick(e) {
   // supposing that a user is clicking repeatedly the button
   // this function executes only once, immediately, because the event handler
   // is then redefined to `null`

    console.log('Clicked!');
  }

  render() {
    return (
      <input
        type="button"
        onClick={this.onClick}
        {...this.props}
      />
    );
  }
}
```
