import { useState } from 'react';
import { Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '../Sizes';

interface Props {
  allowNegativeValues?: boolean;
}

const JunoSlider = ({ allowNegativeValues = false }: Props) => {
  const [value, setValue] = useState(0.2);
  const sliderValue = Math.floor(value * 255) - (allowNegativeValues ? 128 : 0);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <Tooltip label={sliderValue} position="bottom" offset={15} closeDelay={800}>
      <Group justify="center" w={32}>
        <div
          style={{
            height: SLIDER_HEIGHT,
            backgroundColor: 'var(--mantine-color-dark-9)',
          }}
          className="w-2.5 rounded-full relative cursor-pointer flex items-center"
        >
          <div
            ref={ref}
            style={{
              height: `calc(100% - ${SLIDER_Y_PADDING * 2 + 3}px)`,
            }}
            className="w-2.5 absolute flex flex-col items-center"
          >
            <div
              style={{
                height: `${value * 100}%`,
                backgroundColor: 'var(--mantine-color-dark-9)',
              }}
              className="absolute bottom-0 w-full rounded-full "
            />
            <JunoSliderThumb value={value} />
          </div>
        </div>
      </Group>
    </Tooltip>
  );
};

export default JunoSlider;

const JunoSliderThumb = ({ value }: { value: number }) => {
  return (
    <div
      style={{
        bottom: `calc(${value * 100}% - 8px)`,
        backgroundColor: 'var(--mantine-color-dark-4 )',
      }}
      className="absolute rounded-sm w-8 h-4 justify-between flex items-center cursor-pointer"
    >
      <div style={{ backgroundColor: 'var(--mantine-color-gray-1', width: 8, height: 3 }} />
      <div style={{ backgroundColor: 'var(--mantine-color-gray-1', width: 8, height: 3 }} />
    </div>
  );
};
