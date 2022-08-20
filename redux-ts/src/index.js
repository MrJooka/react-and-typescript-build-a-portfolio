import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return <div>Hello Redux!</div>;
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
