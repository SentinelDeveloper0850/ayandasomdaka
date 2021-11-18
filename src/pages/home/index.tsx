import Gallery from 'components/gallery';
import { IGalleryImage } from 'models/gallery';
import './styles.scss';

const Home = () => {
    const gallery1: IGalleryImage[] = [
        {
            id: '1',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp'
        },
        {
            id: '2',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp'
        },
        {
            id: '3',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp'
        },
        {
            id: '4',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp'
        },
        {
            id: '5',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp'
        },
    ];

  return (
    <div className='home-page'>
      <Gallery images={gallery1} />
    </div>
  );
};

export default Home;
