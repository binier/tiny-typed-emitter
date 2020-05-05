# tiny-typed-emitter

Have your events and their listeners type-checked with [no overhead](#no-overhead).

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
    class MyClass extends TypedEmitter<MyClassEvents> {
      constructor() {
        super();
      }
    }
    ```
  - create new event emitter instance:
    ```
    const emitter = new TypedEmitter<MyClassEvent>();
    ```

## Generic events interface
To use with generic events interface:

```
interface MyClassEvents<T> {
  'added': (el: T, wasNew: boolean) => void;
}

class MyClass<T> extends TypedEmitter<MyClassEvents<T>> {

}
```

## No Overhead
Library adds no overhead. All it does is it simply reexports renamed `EventEmitter`
with customized typings.
You can check **lib/index.js** to see the exported code.

