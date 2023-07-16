import React from 'react';

function App() {
  const [thingsArray, setThingsArray] = React.useState(["Thing1","Thing2"]);

  function addItem() {
    setThingsArray(prevState => {
      return [...prevState, `Thing ${prevState.length + 1}`]
    })
  }

  const thingsElements = thingsArray.map(thing => <p>{thing}</p>)

  return (
    // <div>
    //   <Header/>
    //   <Content/>
    // </div>

    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>

  );
}