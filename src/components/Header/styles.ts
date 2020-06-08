import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 32px 0;
  background: #28262e;

  button {
    background: transparent;
    color: #fff;
    border: 0;
    margin: auto 30px;
  }
`;

export const HeaderContent = styled.div`
  width: 100vw;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80px;
    margin-left: 50px;
    @media (max-width: 800px) {
      display: none;
    }
  }

  button {
    margin-left: 50px;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }
    strong {
      a {
        color: #ff9000;
        text-decoration: none;
      }
    }
  }
`;
