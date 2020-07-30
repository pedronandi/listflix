import React from 'react';
import Menu from '../../components/Menu'
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

/*
//Above, React's and component's imports
//Bellow, App component's (wich is Home component now) creation function
//Test
*/

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription={"On this video, firt class of Alura's React Imersion, guys starts explaining the basics about the framework and, at the end, they deliver the home page code, also they make a deploy! It's amazing!"}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel
        category={initialData.categorias[1]}
      />

      <Carousel
        category={initialData.categorias[2]}
      />      

      <Carousel
        category={initialData.categorias[3]}
      />      

      <Carousel
        category={initialData.categorias[4]}
      />      

      <Carousel
        category={initialData.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home; //Exportation of the component's function