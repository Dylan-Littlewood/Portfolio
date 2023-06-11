import { FC } from 'react';
import Tag from './tag';

interface Props {
  title: string;
  tags: string[];
  content: string;
  imageURL: string;
  sourceURL: string;
  liveURL: string;
}

const Card: FC<Props> = ({ title, tags, content, imageURL, sourceURL, liveURL }) => {
  return (
    <div className='card'>
      <img src={imageURL} alt={title} />
      <h3 className='card-title'>{title}</h3>
      <div>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>;
        })}
      </div>
      <p className='card-content'>{content}</p>
      <div className='card-buttons flex-group'>
        <a href={liveURL}>
          <button className='button btn-outline'>Live</button>
        </a>
        <a href={sourceURL}>
          <button className='button btn-outline'>Source</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
