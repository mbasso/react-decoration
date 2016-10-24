## @debounce(wait: number = 300, leading: boolean = false)

Postpone the execution of the decorated function until after `wait` milliseconds have elapsed since the last time it was invoked.
The function will be called with the arguments of the last invocation.
You can pass `true` as second parameter to cause debounce to trigger the function on the leading instead of the trailing edge of the `wait` interval.

You can see a visual example of `debounce` (with `leading = false`) [here](http://demo.nimius.net/debounce_throttle/)

#### Example

```js
class Button extends React.Component {

  @debounce(750, true)
  onClick(e) {
    // supposing that a user is clicking repeatedly the button
    // (< 750ms from the previous click),
    // this function logs only the first time
    // (because of the true as second parameter that indicate the leading edge)
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
