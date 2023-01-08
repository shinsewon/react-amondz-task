import React from 'react';
import styled from 'styled-components';
import useWindowWidth from 'react-hook-use-window-width';
import { useResponsive } from 'hooks';

const PcCol = 6.56;
const MobileCol = 4.9295;
const TabletCol = 4.0104;

function CustomGrid() {
  const { isDesktopSize, isTablet } = useResponsive();
  const windowWidth = useWindowWidth();

  const deviceSize = () => {
    if (isDesktopSize) return PcCol;
    if (isTablet) return TabletCol;
    return MobileCol;
  };

  const column = Math.floor((deviceSize() / 100) * windowWidth);

  return (
    <DivBox>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((col) => {
        return <Col key={col} style={{ width: column }} />;
      })}
    </DivBox>
  );
}

export default CustomGrid;

const DivBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 0%;
  opacity: 0.2;
  z-index: 20;
`;

const Col = styled.div`
  border: 1px solid red;
  background: #0092ff;
  height: 100vh;
`;
