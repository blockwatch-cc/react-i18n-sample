import React, { Suspense } from 'react';
import './App.css';
import './services/i18n'
import Demo from './Demo'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <div className="App">
          <header className="App-header">
            I18N Demo App
          </header>
          <Demo/>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
