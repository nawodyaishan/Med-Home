import React from 'react';
import { useHistory } from 'react-router-dom';

const Contact = (props) => {
  const history = useHistory();
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Home Page</h1>
      <br />
      <button onClick={() => history.goBack()} className="button" >Go Back</button>
    </>
  );
};

export default Contact;