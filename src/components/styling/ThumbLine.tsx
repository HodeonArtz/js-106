import React from 'react';

export interface ThumbLineProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  style?: React.CSSProperties;
}

const ThumbLine = ({ style, ...props }: ThumbLineProps) => {
  return (
    <div
      style={{ backgroundColor: 'var(--mantine-color-gray-1)', width: '100%', height: 3, ...style }}
      {...props}
    />
  );
};

export default ThumbLine;
