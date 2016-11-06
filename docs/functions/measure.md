## @measure(callback: function = console.log)

Uses [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) and [performance.memory](https://docs.webplatform.org/wiki/apis/timing/properties/memory) to measure the performance of a function.
Gets information before and after the execution of the decorated function and makes a comparison.
Information includes [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp), jsHeapSizeLimit, totalJSHeapSize and usedJSHeapSize.
This is particularly useful to measure memory performance, to measure execution time you can use [@time](https://github.com/mbasso/react-decoration/blob/master/docs/functions/time.md).

`@measure` callback is a function (console.log by default) that takes an object as follows:
```js
{
  // represents information before the execution of the decorated function
  before: {
    time: Number,
    memory: {
      jsHeapSizeLimit: Number,
      totalJSHeapSize: Number,
      usedJSHeapSize: Number,
    },
  },
  // represents information after the execution of the decorated function
  after: {
    time: Number,
    memory: {
      jsHeapSizeLimit: Number,
      totalJSHeapSize: Number,
      usedJSHeapSize: Number,
    },
  },
  // represents a comparison between the previous ones
  comparison: {
    time: Number, // after.time - before.time
    memory: {                                                                                   
      usedJSHeapSize: Number, // after.memory.usedJSHeapSize - before.memory.usedJSHeapSize
    },
  },
}
```

**N.B.** if you want to support old browsers you have to polyfill that.
Consider also that [performance.memory](https://docs.webplatform.org/wiki/apis/timing/properties/memory) is only availale in Chrome and you have to enable it manually as you can see in `Notes` section [here](https://docs.webplatform.org/wiki/apis/timing/properties/memory).
If your browser doesn't support this methods, properties will be set to 0.

#### Example

```js
class TextField extends React.Component {

  state = {
    value: '',
  }

  @measure((data) => {
    console.log(`execution time: ${data.comparison.time}`);
  })
  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.onChange}
        {...this.props}
      />
    );
  }
}
```
