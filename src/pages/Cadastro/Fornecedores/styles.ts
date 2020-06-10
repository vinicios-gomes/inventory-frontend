import styled from 'styled-components';

import { Form as UnForm } from '@unform/web';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(UnForm)`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
