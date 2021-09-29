# importer-framework

A very simple JS Library for importing Libraries directly from JS.  

# Installation:
```html
<script type="text/javascript"
    src="http://yourjavascript.com/16514292952/importer.js">
</script>
```
OR
```js
import * as importer from 'http://yourjavascript.com/16514292952/importer.js';
```
# Guide:
- JS  
```js
const framework = "http://yourjavascript.com/39402591521/importer-test.js";
const importResult = async () => {
    await importer.js(framework)
}
if (importResult === false) {
    return console.error('The JS File has not been imported');
}
else
{
    return console.error('The JS File has been imported!');
}
```
- CSS
```js
const cssFile = "https://some.com/some.css";
const importResult = async () => {
    await importer.css(cssFile)
}
if (importResult === false) {
    return console.error('The CSS File has not been imported');
}
else
{
    return console.error('The CSS File has been imported!');
}
```
