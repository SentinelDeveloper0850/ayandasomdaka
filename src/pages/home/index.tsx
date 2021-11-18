import Gallery from 'components/gallery';
import { IGalleryImage } from 'models/gallery';
import './styles.scss';
import illustration1 from '../../images/illustration1.png';
import illustration2 from '../../images/illustration2.png';
import illustration3 from '../../images/illustration3.png';
import illustration4 from '../../images/illustration4.png';
import illustration5 from '../../images/illustration5.png';
import illustration6 from '../../images/illustration6.png';
import illustration7 from '../../images/illustration7.png';
import illustration8 from '../../images/illustration8.jpg';

const Home = () => {
  const gallery1: IGalleryImage[] = [
    // {
    //   id: '1',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    //   views: 3,
    //   likes: 1,
    // },
    // {
    //   id: '2',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    //   views: 16,
    //   likes: 9,
    // },
    // {
    //   id: '3',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://images.unsplash.com/photo-1586734073732-fd664fbd85c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //   views: 0,
    //   likes: 0,
    // },
    // {
    //   id: '4',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://i.pinimg.com/736x/b5/42/7a/b5427ad45437bb7a743900704c7373c5--panning-photography-digital-photography.jpg',
    //   views: 0,
    //   likes: 0,
    // },
    // {
    //   id: '1',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    //   views: 3,
    //   likes: 1,
    // },
    // {
    //   id: '2',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    //   views: 16,
    //   likes: 9,
    // },
    // {
    //   id: '3',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://images.unsplash.com/photo-1586734073732-fd664fbd85c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //   views: 0,
    //   likes: 0,
    // },
    // {
    //   id: '4',
    //   title: 'Title',
    //   description: 'Description',
    //   author: 'Author',
    //   url: 'https://i.pinimg.com/736x/b5/42/7a/b5427ad45437bb7a743900704c7373c5--panning-photography-digital-photography.jpg',
    //   views: 0,
    //   likes: 0,
    // },
  ];

  const illustrations: IGalleryImage[] = [
    {
      id: '1',
      title: '',
      description: '',
      author: 'Author',
      url: illustration1,
      views: 0,
      likes: 0,
    },
    {
      id: '2',
      title: '',
      description: '',
      author: 'Author',
      url: illustration2,
      views: 0,
      likes: 0,
    },
    {
      id: '3',
      title: '',
      description: '',
      author: 'Author',
      url: illustration3,
      views: 0,
      likes: 0,
    },
    {
      id: '4',
      title: '',
      description: '',
      author: 'Author',
      url: illustration4,
      views: 0,
      likes: 0,
    },
    {
      id: '5',
      title: '',
      description: '',
      author: 'Author',
      url: illustration5,
      views: 0,
      likes: 0,
    },
    {
      id: '6',
      title: '',
      description: '',
      author: 'Author',
      url: illustration6,
      views: 0,
      likes: 0,
    },
    {
      id: '7',
      title: '',
      description: '',
      author: 'Author',
      url: illustration7,
      views: 0,
      likes: 0,
    },
    {
      id: '8',
      title: '',
      description: '',
      author: 'Author',
      url: illustration8,
      views: 0,
      likes: 0,
    },
  ];

  return (
    <div className='home-page'>
      <Gallery title='Illustration' images={illustrations} />
      <Gallery title='3D Modelling' images={gallery1} />
      <Gallery title='2D Animation' images={gallery1} />
      <Gallery title='Character Design' images={gallery1} />
    </div>
  );
};

export default Home;
