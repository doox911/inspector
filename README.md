### Install ###

```
$ npm install inspector-with-exceptions
```

### Usage ###

```javascript
import MyCustomException from './MyCustomException';

const Inspector = require('inspector-with-exceptions');
```
### Example ###

```javascript
import MyCustomException from './MyCustomException';

const Inspector = require('inspector-with-exceptions');

const value = null;

/**
 * Some logic
 */

try {
  Inspector.isNumber(value, 'Must be a number', MyCustomException);
} catch (e) {
  if (e instanceof MyCustomException) {
    console.log('MyCustomException');
  }
}
```