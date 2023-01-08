import React from 'react';
import { getFlexStyle, getPaddingOrMarginStyle } from 'utils';

function FlexComponent({
  children,
  style,
  margin = [],
  padding = [],
  flexSet = ['flex-start', 'flex-start', 'flex-start'],
  flexWrap,
  flexDirection = 'row',
  backgroundColor,
}: ComponentCssType) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection,
        flexWrap,
        backgroundColor,
        ...getFlexStyle(flexSet),
        ...getPaddingOrMarginStyle(padding, 'padding'),
        ...getPaddingOrMarginStyle(margin, 'margin'),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default FlexComponent;
