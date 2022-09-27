import './App.css';

function App() {
  return (
    <div>
      <div>
    <h1>Day-1</h1>
      <h2>1.What is Virtual DOM?</h2>
      <p>The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. (or) DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.</p><hr/>
      <h2>2.What is SPA?</h2>
      <p>Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.</p><hr/>
      <h2>3.What is difference between class and functional component?</h2>
      <h3>Class component :-</h3>
      <ul typeof='disc'>
     <li>Class components can be used when you are doing data operations and servercalls.</li>
     <li>Contain lifecycle methods.</li>
     <li>Constructor is required since these are class component.</li>
     <li>contains state variables</li>
      </ul>
      <h3>Functional component :-</h3>
      <ul typeof='disc'>
     <li>Functional components can be used mostly when you want to create dumb or stateless component.</li>
     <li>These components does not have lifecycle methods,they have hooks like useEffect.</li>
     <li>Constructor is  not required.</li>
     <li>Do not have  state variables,they have hooks like useState.</li>
      </ul><hr/>
      <h2>4.What does mean by state and its use in react?</h2>
      <ul typeof='disc'>
        <li>State of a component is an object that holds some information that may change over the lifetime of the component.</li>
        <li>State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.</li>
      </ul><hr/>
      <h2>5.What is JSX and why do we use it instead of js?</h2>
      <ul typeof='disc'>
        <li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</li>
        <li>JSX converts HTML tags into react elements.</li>
        <li>You are not required to use JSX, but JSX makes it easier to write React applications.</li>
      </ul>
      <hr/>
      <h2>6.What is package.json</h2>
      <p>It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project.</p>
      <hr/>
    </div>
      
    </div>
  );
}

export default App;
