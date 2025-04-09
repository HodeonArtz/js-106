import { useState } from 'react';
import { Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '../Sizes';
import ThumbLine from '../styling/ThumbLine';

interface Props {
  defaultValue?: number;
  allowNegativeValues?: boolean;
}

const JunoSlider = ({ allowNegativeValues = false, defaultValue }: Props) => {
  const defaultSliderValue =
    (defaultValue !== undefined && defaultValue * (1 / 255)) ?? (allowNegativeValues ? 0.5 : 0);

  const [value, setValue] = useState(+defaultSliderValue);
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
          className="relative flex w-2.5 cursor-pointer items-center rounded-full"
        >
          <div
            ref={ref}
            style={{
              height: `calc(100% - ${SLIDER_Y_PADDING * 2 + 3}px)`,
            }}
            className="absolute flex w-2.5 flex-col items-center"
          >
            <div
              style={{
                height: `${value * 100}%`,
                backgroundColor: 'var(--mantine-color-dark-9)',
              }}
              className="absolute bottom-0 w-full rounded-full"
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
      className="absolute flex h-4 w-8 cursor-pointer items-center justify-between rounded-sm"
    >
      <ThumbLine />
      <ThumbLine />
    </div>
  );
};
