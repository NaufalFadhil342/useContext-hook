import React, { useContext } from 'react';
import { Context } from '../helper/context';

const Home = () => {
  const { username } = useContext(Context);

  return <h1>This is The Home Page and The User is: {username}</h1>;
};

export default Home;
