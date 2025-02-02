import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

// 부모 페이지에서 사용
interface EnterGradesProps {
  examId: string;
  selectedGrade: string;
  studentId: number;
}

function EnterGrades({ examId, selectedGrade, studentId }: EnterGradesProps) {
  // 각 과목에 대한 등급을 상태로 관리(값이 학년, 학기별로 변하므로)
  const [koreanGrade, setKoreanGrade] = useState('');
  const [mathGrade, setMathGrade] = useState('');
  const [englishGrade, setEnglishGrade] = useState('');
  const [scienceGrade, setScienceGrade] = useState('');
  const [socialGrade, setSocialGrade] = useState('');

  // 학생 id를 받아옴, 이 student 값을 통신할 때 보내면
  // 해당 학생에 대한 성적을 입력할 수 있음
  const student = studentId;
  console.log(student);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // 폼 제출할 때 실행되는 함수-등급을 서버에 저장하는 로직 ㅇ

    // SCORE, GRADE, EXAM_ID, SUBJECT_ID
    const data = {
      scoreList: [
        {
          exam_id: examId,
          subject_id: '1',
          type: '절대',
          grade: selectedGrade,
          score: koreanGrade,
        },
        {
          exam_id: examId,
          subject_id: '2',
          type: '절대',
          grade: selectedGrade,
          score: mathGrade,
        },
        {
          exam_id: examId,
          subject_id: '3',
          type: '절대',
          grade: selectedGrade,
          score: englishGrade,
        },
        // 새로운 데이터 추가
        {
          exam_id: examId,
          subject_id: '4',
          type: '절대',
          grade: selectedGrade,
          score: scienceGrade,
        },
        {
          exam_id: examId,
          subject_id: '5',
          type: '절대',
          grade: selectedGrade,
          score: socialGrade,
        },
      ],
    };

    console.log(data);

    //새로고침했을 때 데이터 날아가는 것 방지
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://3.37.41.244:8000/api/student/${student}/score/`,
        data,
      );
      console.log('성공적으로 저장되었습니다', response.data);
      alert('성공적으로 저장되었습니다');
    } catch (error) {
      console.error('등급 저장 중 오류 발생', error);
      alert('저장 오류! 다시 입력해주세요');
    }
  };

  const getSemesterName = (examId: string) => {
    switch (examId) {
      case '1':
        return '1학기 중간고사';
      case '2':
        return '1학기 기말고사';
      case '3':
        return '2학기 중간고사';
      case '4':
        return '2학기 기말고사';
      case '5':
        return '3월';
      case '6':
        return '5월';
      case '7':
        return '6월';
      case '8':
        return '7월';
      case '9':
        return '9월';
      case '10':
        return '10월';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Explan>{getSemesterName(examId)}</Explan>
      <Input
        type="text"
        placeholder="Korean"
        value={koreanGrade}
        onChange={(e) => setKoreanGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Math"
        value={mathGrade}
        onChange={(e) => setMathGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="English"
        value={englishGrade}
        onChange={(e) => setEnglishGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Science"
        value={scienceGrade}
        onChange={(e) => setScienceGrade(e.target.value)}
      />
      <Input
        type="text"
        placeholder="social"
        value={socialGrade}
        onChange={(e) => setSocialGrade(e.target.value)}
      />

      <BtnWrapper>
        <SummitBtn type="submit">
          <div>
            저장
          </div>
        </SummitBtn>
      </BtnWrapper>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  width: 17rem;
  height: 17rem;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  align-items: center;
  background: rgba(146, 151, 179, 0.13);
  border-radius: 0.875rem;
  border: 0.5px solid #707070;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.4s ease;

  &:hover {
    backdrop-filter: blur(20px);
    scale: 1.05;
  }
`;

const Explan = styled.div`
  width: 100%;
  padding: 3%;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 12rem;
  height: 2rem;
  background-color: transparent;
  border-bottom: 1px solid #3d4450;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

const BtnWrapper = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 1.25rem;
  background: #498bfa;
  margin: 0.5rem 1.19rem 0.56rem 12.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease;
  &:hover {
    background: #005eff;
  }
`;

const SummitBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1rem;
  font-weight: 400;
`;

export default EnterGrades;
