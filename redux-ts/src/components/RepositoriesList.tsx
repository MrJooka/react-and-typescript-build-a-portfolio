import React, { FormEventHandler, useState } from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // form의 submit 이벤트의 기본동작은 페이지 전체를 새로고침해버린다. 그래서 막아야한다
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Saerch</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
