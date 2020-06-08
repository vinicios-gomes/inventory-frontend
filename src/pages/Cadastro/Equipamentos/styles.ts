import styled from 'styled-components';

export const Container = styled.div``;

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   max-width: 1280px;
//   max-height: 720px;
// `;

// export const Formulario = styled.div`
//   display: flex;
//   flex: 0 1 auto;
//   align-items: center;
//   justify-content: center;
//   width: 40%;
//   height: 100%;
//   padding: 10px;
//   margin: 10px;
// `;

// export const SectionForm = styled.div`
//   width: 100%;
//   display: flex;
//   flex: 0 1 auto;
//   justify-content: center;
//   flex-wrap: wrap;
// `;
// export const ImageForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   margin: 15px;
//   margin-top: 50px;

//   p {
//     margin-bottom: 20px;
//   }

//   img {
//     background: #fff;
//     width: 450px;
//     height: 450px;
//     border-radius: 30px;
//   }
// `;
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
