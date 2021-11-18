import { Card, Image } from 'antd';
import { IGalleryImage } from 'models/gallery';
import './styles.scss';

interface IProps {
  images: IGalleryImage[];
}

const { Meta } = Card;

const Gallery = ({ images }: IProps) => {
  return (
    <div className='gallery'>
      <Image.PreviewGroup>
        {images.map((image) => (
          <Card style={{ width: '100%' }} cover={<Image id={image.id} src={image.url} className='thumbnail' />}>
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

export default Gallery;
