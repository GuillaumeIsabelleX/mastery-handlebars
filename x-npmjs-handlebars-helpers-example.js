//import
var h = require('handlebars');

h.registerHelper('markdown', require('helper-markdown'));


//-------------------------------------------
//@STCGoal Use Markdown in your Code to Render it as HTML 

//Handlebars sources
var code = `
<div>
<h1>{{title}}</h1>
<p>{{description}}</p>

<hr>Using Markdown handlebars-helper<hr>

{{#markdown}}
# Title Something
---
* Points a
* Point b

{{/markdown}}

</div>
`;



//Data structure with values
var data =  {
  title : "Hello world Markdown",
  description: "Hello world is a common Magna cillum consequat incididunt laboris nisi voluptate fugiat id voluptate incididunt.",
  peoples:[{name:"Guillaume",note:"main scientist and artist"},{name:"Peter Pan",note:"ficticious caracter"}]
};


  var template = h.compile(code);


  console.log(template(data));