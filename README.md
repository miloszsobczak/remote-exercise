# Frontend code exercise

Hello there!

If you're reading this, it means you're now at the coding exercise step of the engineering hiring process WOOT WOOT. We're really happy that you made it here and super appreciative of your time!

In this exercise you're asked to implement some features in an existing React app, using whatever extra tools you want.

If you have any questions, don't hesitate to create an issue in this repo or reach out directly to <...>.

## Expectations  
* It should be production-ready code - the code will show us how you ship things to production and be a mirror of your craft.  
* Take whatever time you need - we won't look at start/end dates, you have a life besides this and we respect that!  

### 🚀 What are you building

This is a basic CRUD (without the delete) of people. You'll implement an app with 3 pages:

- **People list** - Display a list of people and their attributes. It allows searching by employee name.
- **Create member** - A form to create a new team member;
- **Edit team member** - A form to edit an existing team member;

For further details, follow the design specs in the Figma file shared with you by e-mail.

### 👀 What we will look at

- How you work with HTML, CSS, and JavaScript in a React app;
- How you reproduce the provided design;
- How you structure your codebase and how well it reads;
- How well it works;
- How you write tests. Tests take time, so you just need to test:
  - Button component: Some tests are already done, you will need to complete them.
  - People list page: Write the needed tests.
  - Edit or Create member: Pick one of the flows. You are free to choose between Testing Library, Cypress or any other testing tool/approach.

### ⛔️ What you can't use

- A CSS library like Bootstrap, etc. - we're interested in how you structure your CSS code to achieve something.

### ⏱ How long should it take

- As little as possible, there's no time-frame or deadline for this but we want to be respectful of your time.

## ✅ When you're done

- Complete the "Implementation Details" section at the bottom of this README.
- Open a Pull Request in this repo and send the link to <...>.
- You can also send some feedback about this exercise. Was it too short/big? Boring? Let us know!

---

---

# The project

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Some components already built.
  server # The fake API mentioned above.
  theme # Some base styles used across the project.
  Playground.js # A simple showcase of the existing components.
```

Once again, you have **total freedom to modify** this codebase and use whatever tools you want.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4000 - [http://localhost:4000](http://localhost:4000).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4000/people`: get the full list of people
- `GET http://localhost:4000/people/{id}`: get the person with id `{id}`
- `GET http://localhost:4000/people?name_like={substring}`: search for people where the name includes `{substring}`
- `POST http://localhost:4000/people`: create a new person
- `PATCH http://localhost:4000/people/{id}`: update the person with id `{id}`

## Implementation details

This section is for you to fill in with any decisions you made that may be relevant. You can also change this README to fit your needs.

### Branching model

As this is only for training purposes I've decided to put everything directly to one feature-branch called __feature/miloszsobczak-training__, but keeping commits in clean, standardized way using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) methodology.

### Static analysis

In order to provide consistent experience for developers we should establish common style of javascript is being written.
To make it in reasonable time I've chosen ready-to-go presets:
- `eslint:recommended`,
- `plugin:react/recommended`
- `plugin:jest/recommended`

### Code-quality guard

[Husky](https://github.com/typicode/husky/tree/master) is a pretty known tool for making sure that our code meets specific requirements before publish code to Remote 👋🏻.

### Routing

Based on design - app seems to be a multi-page.
The simplest solution is to use [React Router](https://reactrouter.com/) that declaratively performing navigation.

#### API proxying

API can look on production/pre stage completely differently, but for development purposes local proxy makes sense.
It simplifies network architecture.

### Redux

Redux-saga can be considered as a bazooka to kill the fly, but still I do really like that way of keeping things organized in async flows.
For should we could take under consideration redux-thunk or custom implementation if necessary.

### Form handling

[React Hook Form](https://react-hook-form.com/) is a great library that simplifies form handling using hooks.
For later, production grade experience, we could consider some FormBuilder on top of that lib.

### Testing

I have chosen React Testing Library as I wanted to focus on UI and user actions that are meant to be tested.
To have a high percentage of confidence whether our app works properly, test coverage should be significant higher and should cover sagas and redux.

For interview I've picked up some random tests including containers, components, routing.

## To dos
- Format Currency and properly match the designs (Fow Now I have just used Number.Intl - but it seems like we would need more complex method)
- Standardize how the components are written considering their structure and name quality
- Expose CSS variables and common configuration to be more generic
- Cover tests with sagas and redux flow to make sure that whole process works correctly
- There is no responsiveness implemented, so obviously we should make it working
- EmployeeForm could be more context-agnostic, but it depends on next steps
- Make form validation more complex, allowing to specify different rules
- Add Form Validation for RadioButtons (there were no designs for that state, but I am pretty sure we should cover that and notify the user)
- Use more performance driven practices like memoization, bundling etc
- Besides React there are multiple ways how to make app more performing like preloading/prefetching/cssDOM optimization
- More Accessibility elements/attributes should be used here
- and more ;)
