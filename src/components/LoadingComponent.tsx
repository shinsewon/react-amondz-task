import { Spin } from 'antd';
import styled from 'styled-components';

function LoadingComponent() {
  return (
    <LoadingContainer>
      <Spin size="large" tip="로딩..." />
    </LoadingContainer>
  );
}

export default LoadingComponent;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  color: #8364ff;
  background-color: rgba(255, 255, 255, 0.7);
`;
