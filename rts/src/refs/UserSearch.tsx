import React, { useEffect, useRef, useState } from 'react';

const users = [
  { name: 'Sarah', age: 19 },
  { name: 'Jooka', age: 19 },
  { name: 'Stesk', age: 19 },
  { name: 'Brian', age: 19 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <p>{user?.name}</p>
    </div>
  );
};

export default UserSearch;
