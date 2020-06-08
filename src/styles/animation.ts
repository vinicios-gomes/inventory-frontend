import { keyframes } from 'styled-components';

export const animationRotate = keyframes`
0%{
  transform: rotate(-360deg);
  opacity: 0;
} 100% {
  transform: rotate(0)
  opacity: 1;
}`;

export const animationRadio = keyframes`
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
`;
