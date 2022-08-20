import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 19 },
  { name: 'Jooka', age: 19 },
  { name: 'Stesk', age: 19 },
  { name: 'Brian', age: 19 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');

  const onClick = () => {};

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.name)} />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};

export default UserSearch;
