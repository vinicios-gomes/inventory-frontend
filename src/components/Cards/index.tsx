import React from 'react';

import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

interface CardProps {
  label: string;
  icone: Record<string, any>;
  link: string;
  disable?: boolean;
}

const Card: React.FC<CardProps> = ({
  label,
  icone,
  link,
  disable,
  ...rest
}) => {
  return (
    <Container>
      <Content disabled={disable}>
        <h3>{label}</h3>
        <Link to={link}>
          <Icon icon={icone} />
        </Link>
      </Content>
    </Container>
  );
};

export default Card;
