# Mastery HandleBars

## Next
```sh
yarn add handlebars-helpers --save
yarn add template-helpers --save
# What is the difference between the two?
```

# X
## Simple Handlebars example

```javascript
//import
var h = require('handlebars');

//Handlebars sources
var code = `
<div>
<h1>{{title}}</h1>
<p>{{description}}</p>
</div>
`;

//Data structure with values
var data =  {
  title : "Hello world",
  description: "Hello world is a common Magna cillum consequat incididunt laboris nisi voluptate fugiat id voluptate incididunt."
};

//Compile an Handlebar template from the Code
var template = h.compile(code);

//Creates the HTML Rendering using the handlebars template and the data
var htmlRender = template(data);

//output
console.log(htmlRender);
```



## Handlebars Helper Registration

```javascript

//import
var h = require('handlebars');

//Register an Helper for the Handlebars rendering
h.registerHelper('list',function(items,options)
{
    var out = `
<table>
<tr><td>Name</td><td>Note</td></tr>`;
    items.forEach(element => {
      out +=  // Adding 
      `
<tr><td>${element.name}</td><td>${element.note}</td></tr>`;      
    });
    return
    `${out}
</table>`; //returning the rendering that helper creates
});

//Handlebars sources
var code = `
<div>
<h1>{{title}}</h1>
<p>{{description}}</p>

<hr>Using a List from handlebar helper<hr>
{{#list peoples}}{{/list}}
</div>
`;

//Data structure with values
var data =  {
  title : "Hello world",
  description: "Hello world is a common Magna cillum consequat incididunt laboris nisi voluptate fugiat id voluptate incididunt.",
  peoples:[{name:"Guillaume",note:"main scientist and artist"},{name:"Peter Pan",note:"ficticious caracter"}]
};

//Compile an Handlebar template from the Code
var template = h.compile(code);

//Creates the HTML Rendering using the handlebars template and the data
var htmlRender = template(data);

//output
console.log(htmlRender);

```