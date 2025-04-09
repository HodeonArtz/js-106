import React from 'react';

export interface ThumbLineProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width?: number | string;
}

const ThumbLine = ({ width = 8, ...props }: ThumbLineProps) => {
  return (
    <div style={{ backgroundColor: 'var(--mantine-color-gray-1', width, height: 3 }} {...props} />
  );
};

export default ThumbLine;
