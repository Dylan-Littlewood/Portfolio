import { FC } from 'react';

interface Props {
  title: string;
  content: string;
  imageURL: string;
}

const Card: FC<Props> = ({ title, content, imageURL }) => {
  return (
    <div className='card'>
      <img src={imageURL} alt={title} />
      <h3 className='card-title'>{title}</h3>
      <p className='card-content'>{content}</p>
    </div>
  );
};

export default Card;
