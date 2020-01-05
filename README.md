# light-promisify
Convert any callback function to Promise with the node-style callback (error-first pattern)

[npm package](https://www.npmjs.com/package/light-promisify)

### Installation
```
npm i light-promisify
```

### Example
```javascript
const promisify = require('light-promisify');

// Convert fs.readFile or fs.writeFile (which work with callback) to promise
const fs = require('fs');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

// Use them in an async/await function
const operationOnFiles = async () => {
  const testFile = await readFile('test.txt');
  await writeFile('test2.txt', testFile);
}
```
