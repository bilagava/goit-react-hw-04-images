import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import css from './style.module.css';
// import imagesAPI from '../../services/apiService';

const APIKEY = '27833874-1888522c36b844d581276598f';

const App = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [totalImages, setTotalImages] = useState('');
  const [tag, setTag] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!name) {
      return;
    }
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${name}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(image => {
        if (!image.total) {
          setShowBtn(false);
          return alert('К сожалению по Вашему запросу ничего не найдено');
        }

        setImages(prevState => [...prevState, ...image.hits]);
        setTotalImages(image.total);
        setShowBtn(true);
      })
      .catch(error => error)
      .finally(() => setLoading(false));
  }, [name, page]);

  const handleSubmit = inputName => {
    if (name === inputName) {
      return alert(`Вы уже просматриваете ${inputName}`);
    }
    setName(inputName.toLowerCase());
    setImages([]);
    setPage(1);
  };
  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = (url, tag) => {
    setModalImage(url);
    setShowModal(true);
    setTag(tag);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {images.length !== 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {!loading && images.length !== totalImages && showBtn && (
        <Button onLoadMoreClick={onLoadMoreClick} />
      )}

      {showModal && (
        <Modal image={modalImage} tag={tag} onModalClose={modalClose} />
      )}
    </div>
  );
};

export default App;
