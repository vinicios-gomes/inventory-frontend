import styled, { css } from 'styled-components';

import { animationRadio, animationRotate } from '../../styles/animation';

interface MenusProps {
  gear?: boolean;
  disabled?: boolean;
  radio?: boolean;
}

export const Container = styled.div``;
export const Content = styled.div<MenusProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  margin: 40px;

  width: 350px;
  height: 620px;

  background: rgba(255, 255, 255);
  border: 1px solid #1e1e1e;
  border-radius: 30px;

  h3 {
    font-size: 26px;
    font-weight: 500;
    color: #000;
  }
  svg {
    height: 150px;
    width: 150px;
    color: #000;
  }

  &:hover {
    transform: scale(1.04);
    transition: 0.3s;
  }

  ${props =>
    props.gear &&
    css`
      svg {
        animation: ${animationRotate} 1s cubic-bezier(0.15, 0.15, 0.15, 0.15)
          both;
      }
    `}

  ${props =>
    props.radio &&
    css`
      svg {
        animation: ${animationRadio} 0.8s both;
      }
    `}
    ${props =>
      props.disabled &&
      css`
        a {
          cursor: unset;
          pointer-events: none;
        }
        &:hover {
          transform: scale(1);
        }
        background: rgba(255, 255, 255, 0.1);
        cursor: unset;
      `}
`;
