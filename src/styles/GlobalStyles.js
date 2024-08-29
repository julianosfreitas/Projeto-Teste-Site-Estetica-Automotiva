import styled, { createGlobalStyle } from 'styled-components';

// Estilos Globais
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url(img/banner.jpg);
    color: #f4f4f4;
  }
`;

// Header
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-image: url('img/logo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 130px;
  text-align: center;
  color: #f4f4f4;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.img`
  max-height: 150px;
  margin-right: -10px;
`;

export const Title = styled.h1`
  margin: 0;
`;

// Menu de Navegação
export const Nav = styled.nav`
  background-color: #555;
  padding: 10px 0;
  margin-top: 173px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// Galeria
export const Gallery = styled.div`
  padding: 20px;
  text-align: center;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

export const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Carrossel
export const Carousel = styled.div`
  position: relative;
  max-width: 100%;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
`;

export const CarouselImages = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselImage = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  left: 10px;
`;

export const ButtonNext = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  right: 10px;
`;

// Main
export const Main = styled.main`
  padding: 20px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const Heading2 = styled.h2`
  color: #FF0000;
  border-bottom: 2px solid #FF0000;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

// Formulário de Contato
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #FF0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #CC0000;
  }
`;

// Footer
export const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
`;

// Card
export const Card = styled.div`
  background-color: #333333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  margin: 20px 0;
`;

export const CardHeading2 = styled(Heading2)`
  color: #FF0000;
  border-bottom: 2px solid #FF0000;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

// Parágrafo
export const Paragraph = styled.p`
  color: #f4f4f4;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  font-size: 16px;
`;

// Responsividade
export const ResponsiveMedia = createGlobalStyle`
  @media (max-width: 768px) {
    header, main, footer {
      padding: 15px;
    }

    h2 {
      font-size: 1.5rem;
    }

    input, textarea, button {
      font-size: 1rem;
    }
  }
`;

// Serviço
export const ServiceItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

export const ServiceItemImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const ServiceItemHeading3 = styled.h3`
  color: #FF0000;
  margin-bottom: 10px;
`;

export const ServiceItemParagraph = styled.p`
  color: #333;
`;