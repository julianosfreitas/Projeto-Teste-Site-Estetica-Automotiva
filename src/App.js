// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ===================================================================================

// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'img/Imagem 1.jpg',
//     'img/Imagem 2.jpg',
//     'img/Imagem 3.jpg',
//     'img/Imagem 4.jpg',
//   ];

//   const updateCarousel = () => {
//     const width = document.querySelector('.carousel-images img').clientWidth;
//     document.querySelector('.carousel-images').style.transform = translateX(-${width * currentIndex}px);
//   };

//   const nextImage = () => {
//     setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
//   };

//   const prevImage = () => {
//     setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
//   };

//   useEffect(() => {
//     updateCarousel();
//     window.addEventListener('resize', updateCarousel);
//     return () => {
//       window.removeEventListener('resize', updateCarousel);
//     };
//   }, [currentIndex]);

//   return (
//     <div>
//       <header>
//         <div className="logo-container"></div>
//         <nav>
//           <ul>
//             <li><a href="index.html">Início</a></li>
//             <li><a href="servicos.html">Serviços</a></li>
//             <li><a href="sobre-nos.html">Sobre Nós</a></li>
//             <li><a href="#agendamento">Agendamento</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="galeria">
//           <h2>Galeria</h2>
//           <div className="carousel">
//             <button className="prev" onClick={prevImage}>&#10094;</button>
//             <div className="carousel-images">
//               {images.map((src, index) => (
//                 <img key={index} src={src} alt={Imagem ${index + 1}} className={index === currentIndex ? 'active' : ''} />
//               ))}
//             </div>
//             <button className="next" onClick={nextImage}>&#10095;</button>
//           </div>
//         </section>

//         <section id="agendamento">
//           <h2>Agendamento</h2>
//           <div className="embed-container" data-slug="cardetail" data-url="https://www.gendoou.com/"></div>
//           <script type="text/javascript" src="https://www.gendoou.com/assets/embed/embed.js"></script>
//           <a href="https://www.gendoou.com/cardetail"><button type="submit">Agendar</button></a>
//         </section>
//       </main>

//       <footer>
//         <p>&copy; 2024 Car Detail Estética Automotiva. Todos os direitos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;


// =====================================================================================

// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'img/Imagem 1.jpg',
//     'img/Imagem 2.jpg',
//     'img/Imagem 3.jpg',
//     'img/Imagem 4.jpg',
//   ];

//   const updateCarousel = () => {
//     const width = document.querySelector('.carousel-images img').clientWidth;
//     document.querySelector('.carousel-images').style.transform = `translateX(-${width * currentIndex}px)`;
//   };

//   const nextImage = () => {
//     setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
//   };

//   const prevImage = () => {
//     setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
//   };

//   useEffect(() => {
//     updateCarousel();
//     window.addEventListener('resize', updateCarousel);
//     return () => {
//       window.removeEventListener('resize', updateCarousel);
//     };
//   }, [currentIndex]);

//   return (
//     <div>
//       <header>
//         <div className="logo-container"></div>
//         <nav>
//           <ul>
//             <li><a href="index.html">Início</a></li>
//             <li><a href="servicos.html">Serviços</a></li>
//             <li><a href="sobre-nos.html">Sobre Nós</a></li>
//             <li><a href="#agendamento">Agendamento</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="galeria">
//           <h2>Galeria</h2>
//           <div className="carousel">
//             <button className="prev" onClick={prevImage}>&#10094;</button>
//             <div className="carousel-images">
//               {images.map((src, index) => (
//                 <img key={index} src={src} alt={`Imagem ${index + 1}`} className={index === currentIndex ? 'active' : ''} />
//               ))}
//             </div>
//             <button className="next" onClick={nextImage}>&#10095;</button>
//           </div>
//         </section>

//         <section id="agendamento">
//           <h2>Agendamento</h2>
//           <div className="embed-container" data-slug="cardetail" data-url="https://www.gendoou.com/"></div>
//           <script type="text/javascript" src="https://www.gendoou.com/assets/embed/embed.js"></script>
//           <a href="https://www.gendoou.com/cardetail"><button type="submit">Agendar</button></a>
//         </section>
//       </main>

//       <footer>
//         <p>&copy; 2024 Car Detail Estética Automotiva. Todos os direitos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// ===================================================================================================================================

import React, { useState, useEffect } from 'react';
import './App.css'; // Você pode remover ou ajustar se estiver usando estilos CSS puros
// import styled, { createGlobalStyle } from 'styled-components';
// import GlobalStyle from './GlobalStyles'; // Importa o GlobalStyle correto
import { GlobalStyle, ResponsiveMedia } from './styles/GlobalStyles';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'img/Imagem 1.jpg',
    'img/Imagem 2.jpg',
    'img/Imagem 3.jpg',
    'img/Imagem 4.jpg',
  ];

  const updateCarousel = () => {
    const width = document.querySelector('.carousel-images img').clientWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(-${width * currentIndex}px)`;
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => {
      window.removeEventListener('resize', updateCarousel);
    };
  }, [currentIndex]);

  return (
    <>
      <GlobalStyle />
      <div>
        <header>
          <div className="logo-container"></div>
          <nav>
            <ul>
              <li><a href="index.html">Início</a></li>
              <li><a href="servicos.html">Serviços</a></li>
              <li><a href="sobre-nos.html">Sobre Nós</a></li>
              <li><a href="#agendamento">Agendamento</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="galeria">
            <h2>Galeria</h2>
            <div className="carousel">
              <button className="prev" onClick={prevImage}>&#10094;</button>
              <div className="carousel-images">
                {images.map((src, index) => (
                  <img key={index} src={src} alt={`Imagem ${index + 1}`} className={index === currentIndex ? 'active' : ''} />
                ))}
              </div>
              <button className="next" onClick={nextImage}>&#10095;</button>
            </div>
          </section>

          <section id="agendamento">
            <h2>Agendamento</h2>
            <div className="embed-container" data-slug="cardetail" data-url="https://www.gendoou.com/"></div>
            <script type="text/javascript" src="https://www.gendoou.com/assets/embed/embed.js"></script>
            <a href="https://www.gendoou.com/cardetail"><button type="submit">Agendar</button></a>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Car Detail Estética Automotiva. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
