import React from 'react';

function TextComponent({
  children,
  style,
  fontSize = 12,
  fontWeight,
  lineHeight,
  color = '#1B1B21',
  wordBreak = 'keep-all',
  margin = '0px',
}: TextType) {
  return (
    <p
      style={{
        color,
        fontSize,
        fontWeight,
        lineHeight,
        wordBreak,
        margin,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

export default TextComponent;
