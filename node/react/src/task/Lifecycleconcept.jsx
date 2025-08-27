import React from 'react';

function LifecycleConcept() {
  console.log("Component Mounted");

  return (
    <div>
      <h2>Welcome to React Lifecycle</h2>
      <p>No state change yet</p>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default LifecycleConcept;
