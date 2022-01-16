import React from 'react'
import { Link } from 'react-router-dom';

export default function Home(){
    return (
      <>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <div>This is home</div>
      </>
    );
}