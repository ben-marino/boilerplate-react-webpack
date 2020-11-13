import React from 'react'




const app = () => {
  return (
    <div className="container">
      <Router>
        <Route path={'/'} component={Home} />
      </Router>

    </div>
  );
};


export default App;

