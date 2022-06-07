import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageList } from './ImageGalleryStyled';
import ImageGalleryItem from '../ImageGalleryItem';
import { fetchImages } from '../../services/fetchImages';
import LoadMore from '../LoadMore';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';

export const ImageGallery = ({ image }) => {
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  const [per_page, setPer_Page] = useState(24);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('idle');
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    if (image === '') {
      return;
    }

    const fetch = async () => {
      try {
        const images = await fetchImages(image).then(images => {
          if (images.length === 0) {
            toast.error('Введите корректный запрос');
          }
          setStatus('resolved');
          return images;
        });

        setImages(images);
      } catch (error) {
        setStatus('rejected');
      }
    };
    fetch();
  }, [image]);
  const handleClick = async e => {
    setPage(prevState => prevState + 1);
    setPer_Page(prevState => prevState + 12);

    const images = await fetchImages(image, per_page);
    setImages(images);
  };
  const toggleModal = (largeImageURL, tags) => {
    setShowModal(!showModal);
    setImageModal({ largeImageURL, tags });
  };

  if (status === 'idle') {
    return <div></div>;
  }
  if (status === 'pending') {
    return <TailSpin height={80} width={80} />;
  }
  if (status === 'rejected') {
    return <p> Went wrong something</p>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <ImageList>
          {images.map(images => (
            <ImageGalleryItem
              key={images.id}
              images={images}
              showModal={toggleModal}
            />
          ))}
        </ImageList>
        {images.length > 0 && <LoadMore onClick={handleClick} />}
        {showModal && (
          <Modal toggleModal={toggleModal}>
            <img
              src={imageModal.largeImageURL}
              alt={imageModal.tags}
              width="100"
              height="100"
            />
          </Modal>
        )}
      </div>
    );
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  image: PropTypes.string.isRequired,
};
