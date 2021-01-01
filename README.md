# Includejs
Simple Including of other files with pure Javascript (Node JS)

Simply clone this repository, then run <code>npm install</code>, then <code>npm start</code>.

Add files to be included under the public folder and finally, in index.html, create your custom tag (must contain a hyphen and the data-url attribute)
Eg.
```
<include-file data-url="file.html"></include-file>
```
add a script:

```
import { getFileWithTag } from "./include.module.js";

getFileWithTag('tag-name');
```
BOOM!
