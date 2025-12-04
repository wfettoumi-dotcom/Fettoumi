import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#00bcd4' }}>✅ نجاح النشر باستخدام Node.js (React)</h1>
      <p>Netlify قام بتشغيل أمر البناء بنجاح (Build command).</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
