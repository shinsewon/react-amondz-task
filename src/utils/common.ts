export const getPaddingOrMarginStyle = (
  arrValue: number[],
  key: MarginPaddingType,
) => {
  const style = { [key]: '' };

  if (arrValue.length === 4) {
    style[
      key
    ] = `${arrValue[0]}px ${arrValue[1]}px ${arrValue[2]}px ${arrValue[3]}px`;
  }
  if (arrValue.length === 2) {
    style[key] = `${arrValue[0]}px ${arrValue[1]}px`;
  }

  if (arrValue.length === 1) {
    style[key] = `${arrValue[0]}px`;
  }

  if (arrValue.length === 1 && key === 'margin') {
    if (arrValue[0] === 0) {
      style.margin = '0px auto';
    } else {
      style.margin = `${arrValue[0]}px`;
    }
  }

  return style;
};

export const getFlexStyle = (flexSet: [FlexSet, AlignItems, FlexSet]) => {
  const flexSetValue: FlexSetType = {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  };

  if (flexSet[0]?.length !== 0) {
    flexSetValue.justifyContent = `${flexSet[0]}`;
  }
  if (flexSet[1]?.length !== 0) {
    flexSetValue.alignItems = `${flexSet[1]}`;
  }
  if (flexSet[2]?.length !== 0) {
    flexSetValue.alignContent = `${flexSet[2]}`;
  }

  return flexSetValue;
};
