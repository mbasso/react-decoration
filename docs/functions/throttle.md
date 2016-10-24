## @throttle(wait: number = 300, options: Object = { leading: true, trailing: true })

Executes the decorated function as soon as you call it for the first time, and, if you call it again any number of times during the `wait` period, as soon as that period is over.
You can pass `{ leading: false }` or `{ trailing: false }` as second parameter to disable the leading or the trailing edge call.

You can see a visual example of `throttle` [here](http://demo.nimius.net/debounce_throttle/)

#### Example

```js
class Button extends React.Component {

  @throttle(750, { trailing: false })
  onClick(e) {
    // supposing that a user is clicking repeatedly the button
    // this function logs one time every 750ms
    // (because of { trailing: false } as second parameter that disables the trailing edge)
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
