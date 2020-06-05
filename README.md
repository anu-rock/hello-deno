# Hello, Deno [![Build Status](https://travis-ci.com/anuragbhd/hello-deno.svg?branch=master)](https://travis-ci.com/anuragbhd/hello-deno)

<img width="100" alt="Deno logo animated" src="https://camo.githubusercontent.com/135431e1073ba63356d050b4f449d1cc503f457c/68747470733a2f2f64656e6f6c69622e6769746875622e696f2f616e696d617465642d64656e6f2d6c6f676f2f64656e6f2d636972636c652d32346670732e676966" />

A super-simple Deno app that pulls (from an API) national COVID-19 stats for India, and displays the total count of people who have **recovered** from the disease till yesterday\*.

> \* the API we use for fetching data provides stats for up to a day prior

What else did you expect? Let's spread some positivity in tough times!

---

#### Concepts Covered

- Writing a Deno program (`index.js`)
- Writing TypeScript (all code + interfaces inside `models/`)
- Running a Deno program (see [Running](#running))
- Security and permissions (see [Running](#running))
- Importing external modules (inside `tests/util_test.js`)
- Making network calls (inside `index.js`)
- Unit testing (see [Testing](#testing))
- Continuous integration & deployment (see [CI/CD](#cicd))

#### Running

```
deno run --allow-net index.ts
```

Produces an output like (as of 05-Jun-2020):

> 108450 out of 226714 people are healthy again 😄

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

#### CI/CD

This repo uses the wonderful [Travis CI](https://travis-ci.com/) service for continuous integration. Our CI pipeline is probably the simplest one possible: it just runs unit tests.

Since official support for Deno does not yet exist in most (or any!) CI providers, we have to rely on our own hacks. Before running the pipeline, we instruct Travis to install Deno and make it available globally:

```yaml
before_install:
  - curl -fsSL https://deno.land/x/install/install.sh | sh
  - sudo mv ~/.deno/bin/deno /usr/local/bin

script:
  - deno test
```

---

Copyleft 2020 • MIT licensed  
Anurag Bhandari <ab@anuragbhandari.com>
