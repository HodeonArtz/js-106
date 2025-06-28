import { useEffect, useState } from 'react';
import { Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { to8bit, toUnitNumber } from '@/util/conversion';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '../Sizes';
import ThumbLine from '../styling/ThumbLine';

interface Props {
  onChange?: (value: number) => void;
  value?: number;
  defaultValue?: number;
  allowNegative?: boolean;
}

const JunoSlider = ({ allowNegative = false, onChange, defaultValue, value: propValue }: Props) => {
  const [value, setValue] = useState(defaultValue ? toUnitNumber(defaultValue) : 0);
  const { ref } = useMove(({ y }) => {
    setValue(propValue ? toUnitNumber(check8BitNegativity(propValue)) : 1 - y);
  });

  useEffect(() => {
    if (onChange) {
      onChange(to8bit(value, allowNegative));
    }
  }, [value]);

  return (
    <Tooltip label={to8bit(value, allowNegative)} position="bottom" offset={15} closeDelay={800}>
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
      <ThumbLine style={{ width: 8 }} />
      <ThumbLine style={{ width: 8 }} />
    </div>
  );
};
