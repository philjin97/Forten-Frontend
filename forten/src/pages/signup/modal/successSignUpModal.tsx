import Checkicon from '../../../assets/Checkicon.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SuccessSignUpProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 12rem;
  top: 7rem;
  width: 26.25rem;
  height: 15rem;
  border-radius: 1rem;
  background: #f4f4f4;
`;

const Text = styled.div`
  display: flex;
  width: 25rem;
  height: 2.15906rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #5a5252;
  margin-left: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: Inter;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 525;
  line-height: normal;
`;
const Img = styled.div`
  width: 16rem;
  height: 5.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  display: flex;
  width: 10rem;
  height: 3.75rem;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #5a5252;
  background: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 1rem; //
  margin-left: 8rem;
  margin-top: 2.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  transition: background-color 0.3s ease;

  &:hover {
    background: #ebdeff;
    color: #7c7c7c;
  }
`;

const successSignUpModal = ({ setIsOpen }: SuccessSignUpProps) => {
  const navigate = useNavigate();
  const handlerButtonClick = () => {
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <Container>
      <Img>
        <img src={Checkicon} alt="Checkicon" />
      </Img>
      <Text>회원가입 성공 !</Text>

      <Button onClick={handlerButtonClick}>확인</Button>
    </Container>
  );
};

export default successSignUpModal;
