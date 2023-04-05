import React from "react";
import './Questions.css'

const Questions = () => {
  return (
    <div className="questions">
      <h5>Questions No 1:- Props vs state</h5>
      <p>Ans:- Props meaning 'Properties' that passed from a parent component to a child component as a arguments.They are read only and can't be modified. On the other hand state is an initial data store that uses the setStatus function to update the state and also update UI.</p>
      <h5>Questions No 2:- How does useState work?</h5>
      <p>Ans:- useState is a react hook and it is a function provided by React that allows functional components to have state. When  useState called it returns an array with two values, A current state and a function that you can use to update the state.</p>
      <h5>Questions No 3:- Purpose of useEffect other than fetching data.</h5>
      <p>Ans:- useEffect is a hook in react that allows to perform side effect in components. It can changing the title of the page, setting up a timer or adding an event listener. When pass a function in useEffect that will be executed after every render of the component.</p>
      <h5>Questions No 4:- How Does React work?</h5>
      <p>Ans:- React is used for building user interfaces. It works by using a virtual DOM which is a lightweight copy of the real DOM. When you create a react component you're defining how the UI should look and behave.React then takes your instruction and creates a virtual dom of the UI. Then it calculates the minimum number of changes needed to update the real DOM to match the new virtual DOM, and updates the real DOM to reflect the new state of the UI.</p>
    </div>
  );
};

export default Questions;
