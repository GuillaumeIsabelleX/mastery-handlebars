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