# Contributing

> Any change matters, whatever the size, just do it.

Thanks for taking interest in making contribution to this project. We are happy to have you here.

Before submitting your first pull-request please go through this document. We recommend to check for open [issues](https://github.com/oviirup/tailwindcss-pluggables/issues?q=is:open+is:issue) or [PR](https://github.com/oviirup/tailwindcss-pluggables/pulls?q=is:open+is:pr) to see of someone is already working on similar issue. Also read the community [code of conduct](./code_of_conduct.md) before anything else.

> [!WARNING]
> DO NOT post any code with SENSITIVE INFO such as API keys, secret urls, private email, phone number, etc. Double check your code before submitting. We wont be held responsible for exposing any sensitive info posted by you.

## About this project

This project uses [bun.js](https://bun.sh/) as a package manager. The project structure is as follows...

```
assets
 ├── app
 ├── images
 ├── fonts
 └── ...
src
 ├── app
 │   └── ...
 ├── components
 │   ├── core
 │   │   ├── button
 │   │   ├── modal
 │   │   └── ...
 │   ├── layout
 │   │   ├── header
 │   │   ├── dock
 │   │   └── ...
 │   ├── icons
 │   │   ├── play
 │   │   ├── user
 │   │   └── ...
 │   ├── ui
 │   │   ├── player
 │   │   ├── song
 │   │   ├── banner
 │   │   └── ...
 │   └── utils.ts
 ├── lib
 │   └── ...
 ├── hooks
 │   └── ...

```

## How Do I Contribute?

There are different ways to contribute, each comes with different levels
of tasks, such as:

- Report a bug.
- Request a feature you think is needed.
- Take ownership of the bug you want to fix and let others know about it by commenting on the issue.
- Test and triage reported bugs by others.
- Work on requested/approved features.
- Improve the codebase (lint, naming, comments, tests, etc...)
- Improve the documentation.
- Let the world know about the app!

## Development

### Fork & clone to local machine

Fork the repo from GitHub by clicking the fork button at the top-right.

Clone it...

```bash
git clone https://github.com/oviirup/melancholy.git
```

### Create a new branch

Create a new branch. Please make sure you are not on the **main** branch before making any changes. You can name the branch whatever you like, we suggest to name it as per the issue it aims to solve to the feature.

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
bun install
```

### Make your desired changes ...

Now you can make changes to the repo, update or add components, improve ui / animations / interactions ect.

## Testing

The project uses `vitest` for testing. Although as of December 2024 this project does not contains any tests, But we encourage contributors to add breaking tests.

To start testing run the vitest command

```bash
bun vitest --run
```

If you are using _VSCode_ you can also install the [Vitest extension](vscode:extension/vitest.explorer).
