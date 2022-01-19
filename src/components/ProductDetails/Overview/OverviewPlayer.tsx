import { useState } from 'react';
import { StyledImageConllection } from './ProductOverview';

const thumbOverview = [
  '/access/products/card/1.jpg',
  '/access/products/card/2.jpg',
  '/access/products/card/3.jpg',
  '/access/products/card/4.jpg',
  '/access/products/card/5.jpg',
];

const OverviewPlayer = () => {
  const [mainThumb, setMainThumb] = useState(thumbOverview[0]);

  const handleChangeThumb = (thumb: string) => () => {
    setMainThumb(thumb);
  };

  return (
    <StyledImageConllection>
      <div
        className="main"
        style={{
          backgroundImage: `url(${mainThumb})`,
        }}
      />
      <div className="list">
        {thumbOverview.map((thumb, index) => (
          <div
            onMouseEnter={handleChangeThumb(thumb)}
            key={index}
            className={thumb === mainThumb ? 'item item--active' : 'item'}
            style={{
              backgroundImage: `url(${thumb})`,
            }}
          />
        ))}
      </div>
      <div className="hr" />
      <ul className="sub-info">
        <li className="sub-info__item">- Chip đồ họa: GeForce RTX 3080Ti</li>
        <li className="sub-info__item">- Bộ nhớ: 12GB GDDR6X (384-bit)</li>
        <li className="sub-info__item">- Boost: 1695 MHz</li>
        <li className="sub-info__item">- Nguồn phụ: 2 x 8-pin</li>
      </ul>
    </StyledImageConllection>
  );
};

export default OverviewPlayer;
