## @inject(attribute: string)

Injects component's attribute in the decorated function as first parameter.

#### Example

```js
class User extends React.Component {

  name = 'Matteo Basso'

  @inject('name')
  render(name) {
    return (
      <div>
        {name}
      </div>
    );
  }
}
```
