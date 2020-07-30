import React from 'react';
import PageDefault from '../../../components/PageDefault'; /*Component built to standard the pages (the components)*/
import { Link } from 'react-router-dom'; /*Replaces the <a>*/

function RegisterVideo() {
  return (
    <PageDefault>
        <h1>Register New Video</h1>
     
        <Link to="/register/category">
            Register New Category
        </Link>
    </PageDefault>
  )
}

export default RegisterVideo;