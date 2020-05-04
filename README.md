# typed-event-emitter

Have your events and their listeners type-checked with [minimal overhead](#minimal-overhead).

## Install
  Simply add the dependency using **npm**:

    $ npm i typed-event-emitter

  or using **yarn**:

    $ yarn add typed-event-emitter

## Usage

1. import **typed-event-emitter** library:

    ```import { TypedEventEmitter } from 'typed-event-emitter';```

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
    class MyClass extends TypedEventEmitter<MyClassEvents>() {
      constructor() {
        super();
      }
    }
    ```
  - define typed class:
    ```
    const TEvenetEmitter = TypedEventEmitter<MyClassEvents>();
    // and then use it to create event emitters:
    const emitter = new TEventEmitter();
    ```
  - directly create new event emitter instance (though this syntax isn't exactly pretty...):
    ```
    const emitter = new (TypedEventEmitter<MyClassEvent>())();
    ```
 
## Minimal Overhead
Library adds basically no overhead by exposing a function which essentially returns `EventEmitter` type casted class. This is essentially what typescript generates and what will be included in your application:
```
var events_1 = require("events");
function TypedEventEmitter() {
    return events_1.EventEmitter;
}
exports.TypedEventEmitter = TypedEventEmitter;
```
