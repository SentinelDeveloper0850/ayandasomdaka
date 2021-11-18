import { Card, Image } from 'antd';
import { IGalleryImage } from 'models/gallery';
import './styles.scss';

interface IProps {
  images: IGalleryImage[];
  title: string;
}

const { Meta } = Card;

const Gallery = ({ images, title }: IProps) => {
  return (
    <div className='container'>
      {images.length > 0 && <h3>{title}</h3>}
      <div className='gallery'>
        <Image.PreviewGroup>
          {images.map((image) => (
            <Card
              bordered={false}
              cover={
                <Image id={image.id} src={image.url} className='thumbnail' style={{ height: '320px', width: 'auto' }} />
              }>
              <Meta
                title={image.title.length > 0 ? image.title : null}
                description={image.description.length > 0 ? image.description : null}
              />
            </Card>
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Gallery;
