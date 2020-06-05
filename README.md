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
- Debugging a Deno program (see [Debugging](#debugging))
- Unit testing (see [Testing](#testing))
- Inspecting dependencies (see [Dependency Inspection](#dependency-inspection))
- Creating a browser-friendly bundle (see [Bundling](#bundling))
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

#### Debugging

Using VS Code's debugger is not very complicated even in the case of Deno apps. It's a tad similar to how we use it with pure, simple Node.js programs. See the file `.vscode/launch.json` to learn more.

To start debugging, go to VS Code's **Run** sidebar and start the "Deno Debug" script. Then on, you should be able to do something like this:

![Debugging a Deno program](https://user-images.githubusercontent.com/1288616/83829482-98959580-a700-11ea-86a2-a1b4e7199d3b.png)

#### Dependency Inspection

Since unlike Node.js Deno does not use a package manager and rather relies on the use of distributed http-hosted external modules, manually keeping a tab on a file's dependency tree may get difficult.

You can use Deno's built-in tool for the purpose:

```bash
deno info <file or URL>
```

For example, our `util_test.ts` file depends on a local module (util.js) and an external module called asserts.ts. The asserts.ts module in turn depends on more modules. How do find that out? Simple:

```bash
$ deno info tests/util_test.ts

...
deps:
file:///Users/anurag/Code/Sandbox/hello-deno/tests/util_test.ts
  ├─┬ https://deno.land/std/testing/asserts.ts
  │ ├── https://deno.land/std/fmt/colors.ts
  │ └── https://deno.land/std/testing/diff.ts
  └── file:///Users/anurag/Code/Sandbox/hello-deno/util.ts
```

#### Bundling

One of the key goals behind Deno is to keep its APIs as close to the web standards as possible. So classes, functions and variables outside of Deno namespace are named as per modern web standards. Eg. fetch, TextEncoder, console, crypto, window, and so on.

This is a powerful thing. It means that we can potentially run the same Deno program on both server and browser.

Our little program `index.ts` is browser-friendly. We can use Deno's built-in bundler to combine all dependencies and generate a single file to use as a script/module inside a static HTML file:

```bash
deno bundle index.js > public/bundle.js
```

Also see the [CI/CD](#cicd) section below on how we are using this feature for continuous deployment.

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
