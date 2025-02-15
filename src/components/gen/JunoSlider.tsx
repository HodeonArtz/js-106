import { useState } from 'react';
import { Group, Tooltip } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const JunoSlider = () => {
  const [value, setValue] = useState(0.2);
  const sliderValue = Math.floor(value * 255);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Tooltip label={sliderValue} position="bottom" offset={15} closeDelay={800}>
        <Group justify="center" w={32}>
          <div
            ref={ref}
            style={{
              width: 10,
              height: 120,
              backgroundColor: 'var(--mantine-color-dark-9)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 100,
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            {/* Filled bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                height: `${value * 100}%`,
                width: '100%',
                backgroundColor: 'var(--mantine-color-dark-9)',
                borderRadius: 100,
              }}
            />
            <JunoSliderThumb value={value} />
          </div>
        </Group>
      </Tooltip>
    </>
  );
};

export default JunoSlider;

const JunoSliderThumb = ({ value }: { value: number }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: `calc(${value * 100}% - 8px)`,
        borderRadius: 2,
        width: 32,
        height: 16,
        backgroundColor: 'var(--mantine-color-dark-3  )',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <div style={{ backgroundColor: 'var(--mantine-color-gray-1', width: 8, height: 3 }} />
      <div style={{ backgroundColor: 'var(--mantine-color-gray-1', width: 8, height: 3 }} />
    </div>
  );
};
