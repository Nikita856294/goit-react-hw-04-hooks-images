import { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Container from './Container';
import { GlobalStyled } from './GlobalStyle/GlobalStyled';
import { ToastContainer, toast } from 'react-toastify';

export const App = () => {
  const [image, setImage] = useState('');

  const handleSearchFormSubmit = image => {
    if (image === '') {
      return toast.error('Введите запрос');
    }
    setImage(image);
  };

  return (
    <div>
      <GlobalStyled />
      <Container>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Searchbar onSubmit={handleSearchFormSubmit} />
        <ImageGallery image={image} />
      </Container>
    </div>
  );
};

export default App;
