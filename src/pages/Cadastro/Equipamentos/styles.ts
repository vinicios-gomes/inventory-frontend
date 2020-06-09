import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  > button {
    width: 63%;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 39%;
`;

export const ImageForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 400px;
  margin: 50px;
  img {
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 30px;
  }
`;
export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 39%;
`;
