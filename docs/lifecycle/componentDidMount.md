## @componentDidMount(callback: componentDidMount)

Defines component's lifecycle method [componentDidMount](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount).

#### Example

```js
@componentDidMount(() => {
  console.log('I\'m here!');
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentDidMount() {}

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
