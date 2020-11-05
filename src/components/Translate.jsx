import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {
  const options = [
    { label: 'Afrikaans', value: 'af' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Japanese', value: 'jp' },
  ];

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter your input here</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a languange"
        selected={language}
        onSelectionChange={setLanguage}
        options={options}
      />
      <hr />
      <div>
        <Convert text={text} languange={language} />
      </div>
    </div>
  );
};

export default Translate;
