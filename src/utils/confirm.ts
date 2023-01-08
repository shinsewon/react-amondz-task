import { Modal } from 'antd';

const { confirm } = Modal;

type ConfirmType = {
  title: string;
  content?: string;
  onOk?: ((...args: any[]) => any) | undefined;
  onCancel?: () => void;
};

export const showConfirm = ({
  title,
  content,
  onOk = () => console.log('ok'),
  onCancel = () => console.log('cancel'),
}: ConfirmType) => {
  confirm({
    title,
    content,

    centered: true,
    cancelText: '취소',
    okText: '네',
    onOk() {
      onOk();
    },
    onCancel() {
      onCancel();
    },
  });
};
