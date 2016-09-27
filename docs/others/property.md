## @property(name: string, value: any)

Defines component's property with the given name and value.

#### Example

```js
@property('name', 'Matteo Basso')
class User extends React.Component {

  render() {
    return (
      <div>
        {this.name}
      </div>
    );
  }
}
```
