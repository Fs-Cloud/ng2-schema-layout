# ng2-schema-layout
An angular2 directive converting a json schema to a layout with components and tags

> Please note this component is still under development.

## Install

Clone this repository and require the directive `SchemaLayoutDirective` from the `src` folder.

Npm and bower supports are on their way.

## Usage

### Basics

This component can be used following those steps:
* `import` it where you want to use it
* Add its name to the `directive` array of your component
* Give it at least a **schema** of the layout
* [Optional] Give it an **array of the components** you whish to use in your schema

Example:

``` typescript
import { SchemaLayoutDirective } from './src';

@Component({
  ...
  directives: [
    ...
    SchemaLayoutDirective
  ]
})
export class MyComponent {
  schema: any = require('./schema.mockup.json');
  directives: any[] = [AnotherComponent];
}
```

### Schema format

The schema is an Array of elements with the following attributes :

#### DOM Element

Key       | Type           | Description
----------| -------------- | -------------
tag       | string         | The tag name or component selector (ex: `'div'` or `'my-selector'`)
content   | string         | Define what to put inside the tag. Can be anything from text to html markup. (ex: `'Hello there'`, `'<img src="unicorns.png" alt="my picture"/>'`)
attributes| Array(Objects) | List of the attributes you want on the tag. See parameters of an Attribute object for more detail.
children  | Array(Objects) | A list of Dom elements to put as children. Same model.

#### Attribute
An object where the key is the attribute name and the value... the value.

Example :
`{class: 'centered'}` or `{role: 'navigation'}`

### To make it works
You just need follow some simple rules:

* The schema needs to be an `array`
* Each object can have an array of `children`
* If an object has children, `content` property is ignored
* `attributes` property is a dictionnary to prevent duplicates

Example of a complete schema:

``` javascript
const schema = [
  {
    tag: 'div',
    attributes: {
      layout: 'row center',
      class: 'my-class'
    },
    children: [
      {
        tag: 'sb-my-component',
        content: 'Whatever you want !',
        attributes: {
          myValue: 'It works !',
          self: 'size-x2 stretch'
        }
      },
      {
        tag: 'div',
        content: '<img src="unicorns.png" alt="My picture"/>',
        attributes: {
          self: 'size-x1 center'
        }
      },
      {
        tag: 'div',
        attributes: {
          self: 'size-x1 center'
        },
        children: [
          ...
        ]
      }
    ]
  }
];
```

## Development
* `npm start` will launch a webpack server with live reload and a watcher on demo folder.
* `npm run test` will launch unit tests.
* `npm run e2e` will launch e2e tests.