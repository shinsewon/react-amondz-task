export const validateOnlyNumber = (value: string) => {
  const regExp = /[^0-9]/;
  if ((value ?? '') === '') {
    return Promise.reject(new Error('내용을 입력 해주세요.'));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error('내용에는 공백을 포함할 수 없습니다.'));
  }
  if (regExp.test(value)) {
    return Promise.reject(
      new Error('문자와 특수기호를 제외한 숫자만 입력 가능합니다.'),
    );
  }

  return Promise.resolve();
};

export const validateNoEmpty = (value: string) => {
  console.log('is>>>', (value ?? '') === '');
  const regEex =
    // /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|([\w#!:.?+=&%@!]))?/;
  if ((value ?? '') === '') {
    console.log('v>>>', value);
    return Promise.reject(new Error('내용을 입력 해주세요.'));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error('내용에는 공백을 포함할 수 없습니다.'));
  }
  if (!regEex.test(value)) {
    return Promise.reject(new Error('정확한 URL 주소를 입력해주세요.'));
  }

  return Promise.resolve();
};
