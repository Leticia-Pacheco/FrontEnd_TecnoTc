import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  align-content: center;
<<<<<<< HEAD
  /* align-items: center; */
  /* justify-content: center; */
  /* display: flex; */
  /* overflow-x: hidden; */
=======
  overflow-x: hidden;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
`;

export const Conteudo = styled.div`
  width: 100%;
  min-height: 200px;
  height: auto;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  height: 550px;
<<<<<<< HEAD

  justify-content: center;
  display: flex;

  background-color: var(--primaryPurple);
`;

export const ContInfosHeader = styled.div`
  min-width: 1200px;
  width: auto;
  overflow: hidden;

  display: flex;

  > img {
    margin-top: 85px;
    margin-left: 150px;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 85px;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 70px;

  position: fixed;
  box-shadow: 0px 1px 10px black;
  display: flex;
  flex-direction: row;
  align-content: center;
  /* // align-items: center; */
  justify-content: center;

  background-color: var(--primaryPurple);
`;

export const OpcoesMenu = styled.div`
  min-width: 900px;
  width: auto;
  overflow: hidden;

  position: absolute;
  right: 100px;
  /* width: 300px; */

  > ul {
    margin-top: 20px;
=======

  display: flex;

  background-color: var(--primaryPurple);

  > img {
    margin-top: 85px;
    margin-left: 150px;
  }
  #div-gif-header {
    margin-top: 85px;
  }
  #gif-animado-header {
    height: 100%;
  }
  /* @media (max-width: 768px) {
    #gif-animado-header {
      display: none;
    }
  } */
`;

export const MenuContainer = styled.header`
  width: 100%;
  height: 85px;

  padding-top: 10px;
  padding-left: 20px;
  padding-right: 70px;

  position: fixed;
  box-shadow: 0px 1px 10px black;
  display: flex;
  flex-direction: row;
  /* // align-items: center; */
  justify-content: center;

  background-color: var(--primaryPurple);

  > ul {
    margin-left: 800px;
    margin-top: 20px;

    @media (max-width: 1280px) {
      width: 700px;
      margin-left: 300px;
    }
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
  }
  > ul li {
    margin-left: 20px;
    float: right;

    font-size: 18px;
    font-weight: bold;
    color: white;
    border-bottom: solid 3px white;

    :hover {
      cursor: pointer;
    }
  }
`;

<<<<<<< HEAD
export const LogoHeader = styled.div`
  width: 150px;
  height: 60px;

  position: absolute;
  left: 100px;
  /* width: 300px; */

  > img {
    width: 150px;
    height: 60px;
  }
`;

export const Logo = styled.div`
  width: 165px;
  height: 70px;

  margin-top: -15px;

  > img {
    width: 165px;
=======
export const Logo = styled.div`
  width: 170px;
  height: 70px;

  > img {
    width: 170px;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
    height: 70px;
  }
`;

export const TextoHeader = styled.div`
<<<<<<< HEAD
  width: 750px;
=======
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
  min-height: 200px;
  height: auto;
  overflow: hidden;

  margin-top: 85px;
<<<<<<< HEAD
  padding-top: 120px;
  padding-left: 70px;
  padding-right: 70px;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 35px;
    color: white;
  }

  > p {
    color: white;
    font-size: 18px;

    margin-bottom: 15px;
  }

  > button {
    width: 140px;
    height: 30px;

    margin-bottom: 5px;

    color: white;
    font-weight: bold;
    font-size: 15px;

    border-radius: 4px;
    border: none;
    background-color: var(--primaryGreenWater);

    :hover {
      cursor: pointer;
    }
  }

  > span {
    font-size: 16px;
    color: white;
=======
  margin-left: 60px;

  padding-left: 70px;
  padding-right: 70px;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 35px;
    color: white;
  }

  > p {
    color: white;
    font-size: 1.125rem;

    margin-bottom: 15px;
  }

  > button {
    width: 140px;
    height: 30px;

    margin-bottom: 5px;

    color: white;
    font-weight: bold;
    font-size: 15px;

    border-radius: 4px;
    border: none;
    background-color: var(--primaryGreenWater);
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718

    :hover {
      cursor: pointer;
    }
  }
<<<<<<< HEAD
`;

export const SobreNos = styled.section`
  width: 100%;
  height: 600px;

  display: flex;
  /* // align-items: center; */
  justify-content: center;
  flex-direction: column;
  padding-left: 70px;
  padding-right: 70px;

  > h1 {
    text-align: center;
    font-size: 30px;

    color: var(--primaryPurple);
  }
`;

export const Informacoes = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  word-break: break-word;

  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  > img {
    width: 400px;
    height: 400px;
  }

  > p {
    width: 700px;
    text-align: justify;
    font-size: 30px;

    // color: #4A4E4E;
    color: #262c2c;

    margin-left: 80px;
  }
`;

export const Oferecemos = styled.section`
  width: 100%;
  height: 650px;

  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 70px;
  padding-right: 70px;

  aling-items: center;
  justify-content: center;
  // display: flex;
  word-break: break-all;

  background-color: var(--greyQuaternary);

  > h1 {
    font-size: 30px;
    color: var(--primaryPurple);
  }
`;

export const OferecItem = styled.div`
  width: 220px;
  height: 220px;

  margin-left: 80px;
  margin-right: 80px;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 2px 5px 10px black;
  border-radius: 30px 0px 30px 0px;

  background-color: white;

  > img {
    width: 120px;
    height: 100px;
  }

  > p {
    margin-top: 20px;
    text-align: center;

    font-size: 20px;

    color: var(--grey);
  }

  :hover {
    margin-top: -10px;
    transition: 1s;
  }
`;

export const NossoApp = styled.section`
  width: 100%;
  height: 500px;

  padding-left: 70px;
  padding-right: 70px;

  border-bottom: solid 6px var(--primaryPurple);

  > img {
    width: 100px;
    height: 500px;
  }
`;

export const TextoNossoApp = styled.div`
  width: 450px;
  min-height: 100px;
  height: auto;
  overflow: hidden;

  margin-right: 250px;
  margin-top: -80px;

  line-height: 35px;

  > h1 {
    font-size: 30px;
    color: var(--primaryPurple);

    margin-bottom: 10px;
  }

  > p {
    text-align: justify;
    font-size: 30px;

    color: #4a4e4e;
  }
`;

=======

  > span {
    font-size: 18px;
    color: white;

    :hover {
      cursor: pointer;
    }
  }
  /* @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  } */
`;

export const SobreNos = styled.section`
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 70px;
  padding-right: 70px;

  > h1 {
    text-align: center;
    font-size: 30px;

    color: var(--primaryPurple);
  }
  /* @media (max-width: 768px) {
    height: 300px;
  } */
`;

export const Informacoes = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  word-break: break-word;

  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  > img {
    width: 400px;
    height: 400px;

    margin-right: 300px;
  }

  > p {
    width: 700px;
    font-size: 30px;

    color: #4a4e4e;
    color: #262c2c;
  }
  /* @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 250px;
      height: 250px;
    }
    p {
      width: 250px;
      font-size: 1.8rem;
      color: #262c2c;
    }
  }
  @media (max-width: 425px) {
  } */
`;

export const Oferecemos = styled.section`
  width: 100%;
  height: 650px;

  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 70px;
  padding-right: 70px;
  word-break: break-all;

  background-color: var(--greyQuaternary);

  > h1 {
    font-size: 30px;
    color: var(--primaryPurple);
  }
`;

export const OferecItem = styled.div`
  width: 200px;
  height: 200px;

  margin-left: 80px;
  margin-right: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 2px 5px 10px black;
  border-radius: 30px 0px 30px 0px;

  background-color: white;

  > img {
    width: 120px;
    height: 100px;
  }

  > p {
    margin-top: 20px;
    text-align: center;

    color: var(--grey);
  }

  :hover {
    margin-top: -10px;
    transition: 1s;
  }
`;

export const NossoApp = styled.section`
  width: 100%;
  height: 500px;

  padding-left: 70px;
  padding-right: 70px;

  border-bottom: solid 6px var(--primaryPurple);

  > img {
    width: 100px;
    height: 500px;
  }
`;

export const TextoNossoApp = styled.div`
  width: 450px;
  min-height: 100px;
  height: auto;
  overflow: hidden;

  margin-right: 250px;
  margin-top: -80px;

  line-height: 35px;

  > h1 {
    font-size: 30px;
    color: var(--primaryPurple);

    margin-bottom: 10px;
  }

  > p {
    text-align: justify;
    font-size: 30px;

    color: #4a4e4e;
  }
`;

>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
export const ImageApp = styled.div`
  width: 400px;
  min-height: 450px;
  height: auto;
  overflow: hidden;

<<<<<<< HEAD
  // background-color: yellow;

  align-self: self-end;

=======
  /* // background-color: yellow; */

  align-self: self-end;

>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
  > img {
    width: 350px;
    height: 479px;
  }
`;

export const Equipe = styled.section`
  width: 100%;
<<<<<<< HEAD
  min-height: 650px;
  height: auto;
  overflow: hidden;
=======
  height: 650px;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718

  padding-top: 70px;
  padding-left: 100px;
  padding-right: 100px;

  > h1 {
    text-align: center;
    font-size: 30px;
    color: var(--primaryPurple);

    margin-bottom: 20px;
  }

  > p {
    text-align: center;
    font-size: 25px;

    margin-bottom: 50px;
  }
`;

export const PerfisEquipe = styled.div`
  width: 230px;
<<<<<<< HEAD
  height: 300px;

  display: flex;
  align-items: center;
  /* // justify-content: center; */
  flex-direction: column;

  padding-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 10px;

  > h3 {
    margin-bottom: 10px;

    text-align: center;
    font-size: 24px;

    color: var(--primaryPurple);
  }

  > h2 {
    font-size: 24px;
    text-align: center;
    margin-top: -15px;

    color: var(--primaryPurple);
  }

  > img {
    width: 150px;
    height: 150px;

    margin-bottom: 10px;
    border-radius: 50%;

    :hover {
      width: 160px;
      height: 160px;
      transition: 0.3s;
    }
=======
  height: 400px;

  display: flex;
  align-items: center;
  /* // justify-content: center; */
  flex-direction: column;

  padding-top: 10px;
  margin-right: 30px;
  margin-left: 30px;

  > h3 {
    font-size: 25px;
    margin-bottom: 10px;

    text-align: center;

    color: var(--primaryPurple);
  }

  > h2 {
    font-size: 25px;
    text-align: center;
    margin-top: -10px;

    color: var(--primaryPurple);
  }

  > img {
    width: 200px;
    height: 200px;

    margin-bottom: 10px;
    border-radius: 50%;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
  }

  > span {
    margin-bottom: 5px;

    font-weight: bold;
    font-size: 20px;
    color: var(--primaryPurple);
  }

  > p {
    width: 150px;

    text-align: center;
    font-size: 18px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;
  padding-left: 70px;
  padding-right: 70px;

  background-color: var(--primaryPurple);
`;

export const Contatos = styled.div`
  width: 180px;
  height: 100px;

<<<<<<< HEAD
=======
  margin-right: 320px;

>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
  > ul li {
    margin-bottom: 10px;

    font-size: 16px;
    color: white;
<<<<<<< HEAD

    display: flex;

    > p {
      margin-top: 5px;
      margin-left: 5px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

export const TermosPrivacidade = styled.div`
  width: 320px;
  min-height: 30px;
  height: auto;
  overflow: hidden;

  align-items: center;
  justify-content: center;
  text-align: center;

  margin-right: 300px;
  margin-left: 300px;

  color: white;

  > p {
      font-size: 18px;
  }
`;
=======

    display: flex;

    > p {
      margin-top: 5px;
      margin-left: 5px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

export const TermosPrivacidade = styled.div`
  width: 320px;
  min-height: 30px;
  height: auto;
  overflow: hidden;

  align-items: center;
  justify-content: center;
  text-align: center;

  margin-right: 300px;

  color: white;

  @media (max-width: 1280px) {
    width: 220px;
    margin-right: 200px;
  }
`;
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
