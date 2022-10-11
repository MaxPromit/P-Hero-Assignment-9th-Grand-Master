import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Some Burning Question</h3>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is the purpose of React Router?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>React Router is a standard library for routing in React.</strong> It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How does Context API Works?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around</strong> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Uses Of UseRef Hooks !!!
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>
The useRef Hook allows you to persist values between renders.</strong> It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;