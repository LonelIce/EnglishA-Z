import React, { FC } from 'react';

interface CardProps {
  children: string;
  onClick: () => void;
}

const Card: FC<CardProps> = function ({ children, onClick }) {
  return (
    <div role='button' tabIndex={0} onClick={onClick} onKeyDown={onClick}>
      {children}
    </div>
  );
};

export default Card;
