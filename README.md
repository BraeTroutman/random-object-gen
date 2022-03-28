# random-object-gen

An npm package exporting functions for generating random objects from a single template js object.

## Install
Install just like any other npm package:

```
npm install random-object-gen
```

## Usage
random-object-gen exports functions `genRand` and `genRands` that generate one or any number of random objects respectively from a single template. Templates can take the structure of any valid js object, including arbitrarily nested objects.

first steps after installation are to import at least `genRand`, `genRands`, or both:

```
import { genRands } from 'random-object-gen';
```

