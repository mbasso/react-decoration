## @componentWillMount(callback: componentWillMount)

Defines component's lifecycle method [componentWillMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount).

#### Example

```js
@componentWillMount(() => {
  console.log('I\'m coming!');
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentWillMount() {}

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
