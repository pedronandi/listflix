import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; /* Replaces the <a> */
import PageDefault from '../../../components/PageDefault'; /* Component built to standard the pages (the components) */
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    title: 'My first video',
    url: 'https://www.youtube.com/watch?v=SB-qEYVdvXA',
    category: 'Kitties',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Register New Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.titulo === values.category);

        videosRepository.create({
          titulo: values.title,
          url: values.url,
          categoriaId: chosenCategory.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Videos's Title"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Videos's Link"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Videos's Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestion={categoryTitles}
        />

        <Button type="submit">
          Register
        </Button>
      </form>

      <Link to="/register/category">
        Register New Category
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
