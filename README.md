# tiny-typed-emitter

Have your events and their listeners type-checked with [minimal overhead](#minimal-overhead).

## Install
  Simply add the dependency using **npm**:

    $ npm i tiny-typed-emitter

  or using **yarn**:

    $ yarn add tiny-typed-emitter

## Usage

1. import **tiny-typed-emitter** library:

    ```import { TypedEmitter } from 'tiny-typed-emitter';```

2. define events and their listener signatures (**note:** quotes around event names are not mandatory):
    ```
    interface MyClassEvents {
      'added': (el: string, wasNew: boolean) => void;
      'deleted': (deletedCount: number) => void;
    }
    ```

3. on this step depending on your use case, you can:
  - define your custom class extending `EventEmitter`:
    ```
    class MyClass extends TypedEmitter<MyClassEvents>() {
      constructor() {
        super();
      }
    }
    ```
  - define typed class:
    ```
    const TEvenetEmitter = TypedEmitter<MyClassEvents>();
    // and then use it to create event emitters:
    const emitter = new TEventEmitter();
    ```
  - directly create new event emitter instance (though this syntax isn't exactly pretty...):
    ```
    const emitter = new (TypedEmitter<MyClassEvent>())();
    ```
 
## Minimal Overhead
Library adds basically no overhead by exposing a function which essentially returns `EventEmitter` type casted class. This is essentially what typescript generates and what will be included in your application:
```
var events_1 = require("events");
function TypedEmitter() {
    return events_1.EventEmitter;
}
exports.TypedEmitter = TypedEmitter;
```
