import { Combobox } from '@headlessui/react';
import React, { useState } from 'react';

const term = ['month', 'year'];

const Dropdown = () => {
  const [selectedTerm, setSelectedTerm] = useState(term[0]);
  const [query, setQuery] = useState('');

  const filteredTerm =
    query === ''
      ? term
      : term.filter((eachterm) => {
          return eachterm.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedTerm} onChange={setSelectedTerm}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredTerm.map((eachterm) => (
          <Combobox.Option key={eachterm} value={eachterm}>
            {eachterm}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default Dropdown;
