import React from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { FloatButton } from 'antd';

type ModalType = {
  onClick: () => void;
  isDesktopSize: boolean;
};

function FloatButtonComponent({ onClick, isDesktopSize }: ModalType) {
  return (
    <FloatButton
      shape="circle"
      type="primary"
      style={{ right: isDesktopSize ? 94 : 10, width: 64, height: 64 }}
      icon={<RiImageAddFill size={20} />}
      onClick={onClick}
    />
  );
}

export default FloatButtonComponent;
