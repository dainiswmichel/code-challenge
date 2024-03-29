///// Section 1: Imports and Component Definition -------//
/*
This section imports necessary dependencies and defines the main App component.
We're going to import the React library, along with the useState and useEffect hooks.
We're also going to import two components: PoemsContainer and NewPoemForm.
*/

import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

/* Code to English Translation:
"import" is a keyword that allows us to import functions, objects or values from other modules.
"React" is the default export of the react package.
"," is a separator used in the import statement.
"{" and "}" are used to import named exports from a module.
"useState" and "useEffect" are named exports from the react package, they are hooks provided by React.
"from" is a keyword used in the import statement to specify the path of the module.
'"react"' is the path of the module we are importing from.
"PoemsContainer" and "NewPoemForm" are the default exports of the PoemsContainer.js and NewPoemForm.js files respectively.
"./PoemsContainer" and "./NewPoemForm" are the paths of the modules we are importing from.
";" is used to denote the end of a statement.
*/

/*
More on React components: 
https://reactjs.org/docs/components-and-props.html

More on importing in JavaScript: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

More on React Hooks (useState and useEffect): 
https://reactjs.org/docs/hooks-intro.html
*/
// ------------------------------------------End of Section 1//


///// Section 2.0 : Main App Component -------//
/*
In this section, we define the main App component of our application.
*/
// Main App component
function App() {
  /*
  The curly brace opens here to define the body of the App component function.
  Inside this function, we define the behavior and structure of the App component.
  The curly brace will close at the end of the function definition, encompassing all the code within it.
  */

	
// Section 2.1: State Variables -------//
  /*
  In this section, we're going to declare and initialize state variables for the App component.
  We're going to use the useState hook to create two state variables: poems and showForm.
  "poems" will be an array that holds the list of poems.
  "showForm" will be a boolean that determines whether to show the form for creating a new poem.
  */

  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(true);

  /* Code to English Translation:
  "const" is a keyword that declares a block-scoped constant variable.
  "openSquareBracket" and "closeSquareBracket" are used to destructure the array returned by useState.
  "poems" and "setPoems" are the state variable and the function to update it, respectively.
  "useState" is a hook that lets you add React state to function components.
  "openSquareBracket" and "closeSquareBracket" denote an empty array, which is the initial state for the "poems" state variable.
  "showForm" and "setShowForm" are the state variable and the function to update it, respectively.
  "true" is the initial state for the "showForm" state variable, a boolean value.
  "semicolon" is used to denote the end of a statement.
  */
  /*
  More on useState hook: 
  https://reactjs.org/docs/hooks-state.html

  More on destructuring in JavaScript: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  */
  // ------------------------------------------End of Section 2.1//

  // Section 2.2 : useEffect Hook -------//
  /*
  In this section, we're going to use the useEffect hook to fetch poem data from the server when the component mounts.
  The fetch API is used to make a GET request to 'http://localhost:6001/poems'.
  The response is then converted to JSON and the resulting data is used to update the 'poems' state variable.
  If there's an error during the fetch operation, it will be logged to the console.
  */

  useEffect(() => {
    fetch('http://localhost:6001/poems')
      .then(response => response.json())
      .then(data => setPoems(data))
      .catch(error => console.error('Error fetching poems:', error));
  }, []);

  /* Code to English Translation:
  "useEffect" is a hook that lets you perform side effects in function components.
  "openParenthesis" and "closeParenthesis" are used to define a function.
  "openCurlyBrace" and "closeCurlyBrace" are used to define the body of a function.
  "fetch" is a function that provides an interface for fetching resources.
  "openSingleQuote" and "closeSingleQuote" are used to define a string.
  "http://localhost:6001/poems" is the URL we are fetching data from.
  "dot" is used to call a method on an object.
  "then" is a method that returns a Promise.
  "response" is the result of the fetch request.
  "arrow" is used to define a function.
  "response.json" followed by "openParenthesis" and "closeParenthesis" is a method that parses the response to JSON.
  "data" is the parsed response.
  "setPoems" is a function that updates the "poems" state variable.
  "catch" is a method that catches any errors that occur during the fetch operation.
  "error" is any error that occurs during the fetch operation.
  "console.error" is a method that outputs an error message to the web console.
  "semicolon" is used to denote the end of a statement.
  "openSquareBracket" and "closeSquareBracket" denote an empty array, which means the effect will run once when the component mounts.
  */

  /*
  More on useEffect hook: 
  https://reactjs.org/docs/hooks-effect.html

  More on fetch API: 
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  More on Promises: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  */
  // ------------------------------------------End of Section 2.2 //


  // Section 2.3: Function Definitions -------//
  /*
  In this section, we define functions for adding a new poem and updating the read status of a poem.
  */
  // Function to add a new poem
  const addPoem = (newPoem) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPoem),
    })
    .then(response => response.json())
    .then(data => setPoems([...poems, data]))
    .catch(error => console.error('Error:', error));
  };

  /* Code to English Translation:
  "const" is a keyword that declares a block-scoped constant variable.
  "addPoem" is the name of the function.
  "openParenthesis" and "closeParenthesis" are used to define a function.
  "newPoem" is the parameter of the function.
  "openCurlyBrace" and "closeCurlyBrace" are used to define the body of a function.
  "fetch" is a function that provides an interface for fetching resources.
  "openSingleQuote" and "closeSingleQuote" are used to define a string.
  "http://localhost:6001/poems" is the URL we are making a POST request to.
  "method" is a property that specifies the HTTP method to use.
  "POST" is the HTTP method used to send data to the server.
  "headers" is a property that specifies the headers to include in the request.
  "Content-Type" is a header that specifies the media type of the resource.
  "application/json" is the media type of the resource.
  "body" is a property that specifies the body of the request.
  "JSON.stringify" followed by "openParenthesis" and "closeParenthesis" is a method that converts a JavaScript object or value to a JSON string.
  "newPoem" is the data being sent to the server.
  "dot" is used to call a method on an object.
  "then" is a method that returns a Promise.
  "response" is the result of the fetch request.
  "arrow" is used to define a function.
  "response.json" followed by "openParenthesis" and "closeParenthesis" is a method that parses the response to JSON.
  "data" is the parsed response.
  "setPoems" is a function that updates the "poems" state variable.
  "openSquareBracket", "dotDotDot", "poems", "comma", "data", and "closeSquareBracket" are used to create a new array with the existing poems and the new poem.
  "catch" is a method that catches any errors that occur during the fetch operation.
  "error" is any error that occurs during the fetch operation.
  "console.error" is a method that outputs an error message to the web console.
  "semicolon" is used to denote the end of a statement.
  */

  /*
  More on fetch API: 
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  More on Promises: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  More on JSON.stringify: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  */
  // ------------------------------------------End of Sectio 2.3 //

// Section 2.3: Insert title -------//
  /*
  insert explanation of what the code is about to do
    */

// Function to update the read status of a poem
  const handleReadClick = (id) => {
    const updatedPoem = poems.find(poem => poem.id === id);
    updatedPoem.read = !updatedPoem.read;

    fetch(`http://localhost:6001/poems/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ read: updatedPoem.read }),
    })
    .then(response => response.json())
    .then(data => {
      const updatedPoems = poems.map(poem => 
        poem.id === id ? data : poem
      );
      setPoems(updatedPoems);
    })
    .catch(error => console.error('Error:', error));
  };

  /* Code to English Translation:
  "const" is a keyword that declares a block-scoped constant variable.
  "handleReadClick" is the name of the function.
  "openParenthesis" and "closeParenthesis" are used to define a function.
  "id" is the parameter of the function.
  "openCurlyBrace" and "closeCurlyBrace" are used to define the body of a function.
  "updatedPoem" is a constant that stores the poem with the given id.
  "poems.find" is a method that returns the first element in the array that satisfies the provided testing function.
  "poem" is the current element being processed in the array.
  "arrow" is used to define a function.
  "poem.id" is the id of the current poem.
  "tripleEquals" is used for comparison.
  "id" is the id of the poem we want to update.
  "updatedPoem.read" is the read status of the updated poem.
  "exclamationMark" is used to negate a value.
  "fetch" is a function that provides an interface for fetching resources.
  "openBacktick", "http://localhost:6001/poems/", "dollarSign", "openCurlyBrace", "id", "closeCurlyBrace", and "closeBacktick" are used to define a string.
  "method" is a property that specifies the HTTP method to use.
  "PATCH" is the HTTP method used to send data to the server.
  "headers" is a property that specifies the headers to include in the request.
  "Content-Type" is a header that specifies the media type of the resource.
  "application/json" is the media type of the resource.
  "body" is a property that specifies the body of the request.
  "JSON.stringify" followed by "openParenthesis" and "closeParenthesis" is a method that converts a JavaScript object or value to a JSON string.
  "openCurlyBrace", "read", "colon", "updatedPoem.read", and "closeCurlyBrace" are used to define an object.
  "dot" is used to call a method on an object.
  "then" is a method that returns a Promise.
  "response" is the result of the fetch request.
  "arrow" is used to define a function.
  "response.json" followed by "openParenthesis" and "closeParenthesis" is a method that parses the response to JSON.
  "data" is the parsed response.
  "updatedPoems" is a constant that stores the updated list of poems.
  "poems.map" is a method that creates a new array with the results of calling a provided function on every element in the array.
  "poem" is the current element being processed in the array.
  "arrow" is used to define a function.
  "poem.id" is the id of the current poem.
  "tripleEquals" is used for comparison.
  "id" is the id of the poem we want to update.
  "questionMark" is used for conditional (ternary) operations.
  "data" is the updated poem.
  "colon" is used for conditional (ternary) operations.
  "poem" is the current poem.
  "setPoems" is a function that updates the "poems" state variable.
  "updatedPoems" is the updated list of poems.
  "catch" is a method that catches any errors that occur during the fetch operation.
  "error" is any error that occurs during the fetch operation.
  "console.error" is a method that outputs an error message to the web console.
  "semicolon" is used to denote the end of a statement.
  */

  /*
  More on fetch API: 
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

  More on Promises: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  More on JSON.stringify: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

  More on Array.prototype.find: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  More on Array.prototype.map: 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
// ------------------------------------------End of Section 2.3 //

  
///// Section: Render -------//

/*
In this section, we define the JSX to render for the App component.
*/

// A div container with the class "app"
return (
	<div className="app">
		<div className="sidebar">
			<button onClick={() => setShowForm(!showForm)}>Show/hide new poem form</button>
			{showForm ? <NewPoemForm addPoem={addPoem} poemCount={poems.length} /> : null}
		</div>
		<div className="poems-sidebar">
			<PoemsContainer poems={poems} onReadClick={handleReadClick} />
		</div>
	</div>
);

/* Code to English Translation:
"return" is a keyword that specifies the value to be returned from a function.
"openParenthesis" and "closeParenthesis" are used to group expressions.
"lessThanSign" and "greaterThanSign" are used to define a JSX element.
"div" is a JSX element that represents a division or a section in an HTML document.
"className" is a property that specifies the class name of an element.
"equalsSign" is used to assign a value to a property.
"doubleQuotes" are used to define a string.
"app" is the class name of the div element.
"sidebar" is the class name of the div element.
"button" is a JSX element that represents a clickable button.
"onClick" is a property that specifies a script to be run when an element is clicked.
"openCurlyBrace", "arrow", "setShowForm", "openParenthesis", "exclamationMark", "showForm", "closeParenthesis", and "closeCurlyBrace" are used to define a function that toggles the showForm state variable.
"showForm", "questionMark", "openParenthesis", "ternary", "closeParenthesis" operation that renders the NewPoemForm component if showForm is true, and null otherwise.
"NewPoemForm" is a JSX element that represents the NewPoemForm component.
"addPoem" is a property that specifies the addPoem function to be passed to the NewPoemForm component.
"poemCount" is a property that specifies the number of poems to be passed to the NewPoemForm component.
"poems.length" is the number of poems.
"poems-sidebar" is the class name of the div element.
"PoemsContainer" is a JSX element that represents the PoemsContainer component.
"poems" is a property that specifies the poems to be passed to the PoemsContainer component.
"onReadClick" is a property that specifies the handleReadClick function to be passed to the PoemsContainer component.
*/

/*
More on JSX: 
https://reactjs.org/docs/introducing-jsx.html
*/

// ------------------------------------------End of Section//


///// Section: Closing Curly Brace -------//
// This closing curly brace `}` is closing the `App` function.
// The `App` function is a component in React. All the code between the opening and closing braces of this function is part of the `App` component.
// This includes any hooks, state variables, helper functions, event handlers, and the JSX returned by the component.
// Always ensure that your opening and closing braces match to avoid errors and bugs in your code.
}
// ------------------------------------------End of Section//


// Section: Export -------//
/*
In this section, we export the App component so it can be used in other files.
"export" is a keyword in JavaScript that is used to export functions, objects, or primitive values from a module so they can be used by other programs with the import statement.
"default" is a keyword in JavaScript that is used to specify the default export from a module. A module can have only one default export and it can be exported without curly braces.
"App" is the name of the function we are exporting. In this case, it's a React component. This means that other files in our application can import and use the App component.
*/
// Exporting the App component as the default export
export default App;
/* Code to English Translation:
"export" is a keyword that specifies that the following declaration is to be exported from the module.
"default" is a keyword that specifies the default export from a module.
"App" is the name of the function we are exporting.
*/
/*
More on ES6 exports: 
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
*/
// ------------------------------------------End of Section//