 # alx-backend-javascript
# 0x06. Unittests in JS

## Learning Objectives

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Resources

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)

## Usage

To run the test suite, use the following command:

```bash
npm test
```

## Examples

Here are some examples of how to use Mocha and Chai in your tests:

```javascript
const { expect } = require('chai');
const sinon = require('sinon');

describe('My Test Suite', function() {
    it('should pass this test', function() {
        expect(true).to.be.true;
    });

    it('should spy on a function', function() {
        const myObj = {
            myFunction: function() {
                return 'Hello';
            }
        };
        const spy = sinon.spy(myObj, 'myFunction');
        myObj.myFunction();
        expect(spy.calledOnce).to.be.true;
    });
});
```