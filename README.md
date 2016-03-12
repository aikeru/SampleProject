# Sample Project

This project is a sample node.js project, illustrating two separate node.js services.<br/>
<br/>
There exists an evaluator, which accepts simple arithmetic expressions (ie: addition, multiplication) with two operands, and returns the result. There is also a generator, which generates the expressions that can be evaluated by the evaluator service.<br/>
<br/>
Mocha is used to test both of these services.

## Getting Started

* This solution was developed against node v4.2.6 and npm v3.8.1. npm 3+ is strongly recommended as Babel 6.x is used to transpile ES6+ code.
* For convenience, you can run `setup` in the root of the project, which will install node modules for the root (testing, gulp, transpile), the evaluator and the generator, as well as transpile the source code for the evaluator and generator.
* Start the evaluator first, which by default hosts at http://localhost:8001. Run `npm run server` from the root, OR run `node app.js` from the evaluator folder.
* Start the generator(s) second. Run `npm run client` from the root, OR run `node app.js` from the generator folder.
* Stop either service with `Ctrl+C`

## Development

For TDD workflow, start `gulp watch-test` from the root of the project. Gulp will watch the `.jsx` files and rerun the tests when changes occur. Tests are transpiled on-the-fly, and must have a `require()` call in `./tests/bootstrap.tests.jsx`.

## UML Diagrams

There are three UML diagrams included with this project.

* Evaluator Generator Sequence (Sequence Diagram)
* Evaluator Service (Activity Diagram)
* Generator Service (Activity Diagram)

These all reside under the `UML` folder in this repository and were created using the free online draw.io tool.
