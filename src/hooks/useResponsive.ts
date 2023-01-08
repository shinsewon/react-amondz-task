import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isDesktopSize = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const responseType = (...arg: number[]) => {
    if (isDesktopSize && !Number.isNaN(Number(arg[0]))) return arg[0];
    if (isTablet && !Number.isNaN(Number(arg[1]))) return arg[1];
    if (isMobile && !Number.isNaN(Number(arg[2]))) return arg[2];

    return 0;
  };

  return { isDesktopSize, isTablet, isMobile, responseType };
};

export default useResponsive;
