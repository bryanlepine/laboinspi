import React from 'react';
import Typewriter from 'typewriter-effect';
import '../css-styles/app.scss';

function App() {
  const words = ['Créative', 'Passionnée','Attentive','Wedding Designer'];

  return (
    <div className="App">
      <p>Salut moi c'est Marine <span className='space-typewriter'>:</span></p>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          delay: 100, // Ajoute un délai entre chaque mot
        }}
      />
    </div>
  );
}

export default App;