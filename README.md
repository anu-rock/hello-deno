# Hello, Deno [![Build Status](https://travis-ci.com/anuragbhd/hello-deno.svg?branch=master)](https://travis-ci.com/anuragbhd/hello-deno)

<img width="100" alt="Deno logo animated" src="https://camo.githubusercontent.com/135431e1073ba63356d050b4f449d1cc503f457c/68747470733a2f2f64656e6f6c69622e6769746875622e696f2f616e696d617465642d64656e6f2d6c6f676f2f64656e6f2d636972636c652d32346670732e676966" />

A super-simple Deno app that pulls (from an API) national COVID-19 stats for India, and displays the total count of people who have **recovered** from the disease till yesterday.

What else did you expect? Let's spread some positivity in tough times!

#### Concepts Covered

- writng a Deno program (`index.js`)
- security and permissions (see [Running](#running))
- importing external modules (inside `index.js`)
- making network calls (inside `index.js`)
- unit testing (`tests/util_test.ts`)
- writing TypeScript and creating models (all code + interfaces inside `models/`)

#### Running

```
deno run --allow-net index.ts
```

Produces an output like (as of 20-May-2020):

> 42352 out of 106548 people are healthy again 😄

#### Testing

```
deno test
```

Produces an output like:

> running 2 tests  
> test getDateString() works correctly with single-digit date ... ok (3ms)  
> test getDateString() works correctly with double-digit date ... ok (1ms)
>
> test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (4ms)

---

Copyleft 2020 • MIT licensed  
Anurag Bhandari <ab@anuragbhandari.com>
