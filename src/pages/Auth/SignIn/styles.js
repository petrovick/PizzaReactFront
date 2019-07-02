import styled from 'styled-components';
// import colors from '~/styles/colors';
// import metrics from '~/styles/metrics';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const SignForm = styled.form`
  background: colors.transparent;
  border-radius: 5px;
  /*padding: 40px;*/
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  img {
    width: 72px;
    height: 72px;
    margin-bottom: 20px;
  }

  div {
    background: colors.transparent;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    input {
      /*
      height: 40px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 1);
      color: #000000;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;
*/
      &:focus {
        border-color: #7289da;
      }
    }

    button {
      margin: 20px 0;
    }
  }
`;
