import React, { useState } from 'react';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown.jsx';
import Accordion from './components/Accordion.jsx';
import Search from './components/Search.jsx';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'Question #1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi. Dignissim cras tincidunt lobortis feugiat vivamus.',
  },
  {
    title: 'Question #2',
    content: 'The quick brown fox jumps over the lazy dog',
  },
  {
    title: 'Question #3',
    content:
      'Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectionChange={setSelected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
