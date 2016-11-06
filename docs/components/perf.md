## @perf(options: Object)

Uses [Performance Tools](https://facebook.github.io/react/docs/perf.html) to measure components performance so that you can identify perf issues like bottlenecks.

Here there are two interesting links about that:
- ["Performance Engineering with React"](http://benchling.engineering/performance-engineering-with-react/)
- ["A Deep Dive into React Perf Debugging"](http://benchling.engineering/deep-dive-react-perf-debugging/)

`@perf` takes an Object as parameter with the following attributes:
- `prints`: defines which methods have to be used to print the information.
  It is an array that can contain the following items: `inclusive`, `exclusive`, `wasted` and `operations`.
  This values maps the ones that are defined [here](https://facebook.github.io/react/docs/perf.html#printing-results).
- `event`: `mount` or `update`, defines which use between `componentWillMount/componentDidMount` and `componentWillUpdate/componentDidUpdate`.

**N.B.** you have to install [react-addons-perf](https://www.npmjs.com/package/react-addons-perf) in order to use this decorator.

#### Example

```js
// Supposing that we want to measure the performance of this component
// during its first mounting, printing also its children
// we can do the following

@perf({
  prints: ['inclusive'],
  event: 'mount',
})
class TextField extends React.Component {

  state = {
    value: '',
  }

  // needed to avoid readonly exception (if event = 'mount')
  componentWillMount() {
    // you can do stuff here without problems
  }

  // needed to avoid readonly exception (if event = 'mount')
  componentDidMount() {
    // you can do stuff here without problems
  }

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
