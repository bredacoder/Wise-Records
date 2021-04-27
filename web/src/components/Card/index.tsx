import React from 'react';

import { ImPlay3 } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';

import {
  DivCard, CardImage, BtnPlay, Description,
} from './styles';

interface Beats {
  image: string;
  name: string;
  style: string;
  bpm: string;
  price: number;
}

const Card: React.FC<Beats> = ({
  image, name, style, bpm, price,
}: Beats) => (
  <>
    <DivCard>
      <CardImage>
        <img src={image} alt="cardImage" />

        <BtnPlay>
          <button type="button">
            <ImPlay3 fontSize={25} color="#fff" />
          </button>
        </BtnPlay>
      </CardImage>

      <Description>
        <div>
          <span>{name}</span>
          <p>{style}</p>
          <p>{bpm}</p>
        </div>
        <div>
          <button type="button">
            <FaShoppingCart color="#fff" fontSize={16} />
            <span>{price}</span>
          </button>
        </div>
      </Description>
    </DivCard>
  </>
);

export default Card;
