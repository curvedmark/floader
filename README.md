# floader

File reading utility, Browserify aware.

Use `fs.readFile` when directly required. Use XHR when being browserified.

## Installation

	npm install floader

## Example

```javascript
var loader = require('floader');
loader.load('/path/to/file', function (err, content) {
	console.log(content);
});
```