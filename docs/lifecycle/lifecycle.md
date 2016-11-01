## @lifecycle(functions: Object)

Defines component's lifecycle methods.
@lifecycle parameter is an object defined as follow:
- property name: represents the name of a lifecycle method.
- property value: represents a lifecycle method.

#### Example

```js
@lifecycle({
  componentWillMount: () => {
    console.log('I\'m coming!');
  },
  componentDidMount: () => {
    console.log('I\'m here!');
  },
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentWillMount() {}

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