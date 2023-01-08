import { useCallback } from 'react';
import { validateOnlyNumber, validateNoEmpty } from 'utils';

function useFormValidation() {
  const handleValidateNoEmpty = useCallback(
    (_: any, value: string) => validateNoEmpty(value),
    [],
  );

  const handleValidateOnlyNumber = useCallback(
    (_: any, value: string) => validateOnlyNumber(value),
    [],
  );
  return { handleValidateNoEmpty, handleValidateOnlyNumber };
}

export default useFormValidation;
