import React, { useContext, useState } from 'react';
import { Context } from '../../helper/context';

export const ChangeProfile = () => {
  const { setUsername } = useContext(Context);
  const [newUser, setNewUser] = useState('');

  return (
    <div>
      <input placeholder="Change Username" onChange={(e) => setNewUser(e.target.value)} />
      <button
        onClick={() => {
          setUsername(newUser);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
