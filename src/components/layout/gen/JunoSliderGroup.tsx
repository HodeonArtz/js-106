import { ReactNode } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { Group, Stack, Text, Transition } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import JunoSlider from '@/components/gen/JunoSlider';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '@/components/Sizes';

export type SliderData = {
  label: string;
  defaultValue?: number;
  allowNegativeValues?: boolean;
};

type HighlightedLine = {
  label: string | ReactNode;
  position: number;
};

interface Props {
  data: SliderData[];
  allowNegativeValues?: boolean;
}

const JunoSliderGroup = ({ data, allowNegativeValues = false }: Props) => {
  const { hovered, ref } = useHover();
  return (
    <Group ref={ref} align="end" justify="center" gap={0} pos="relative" mx="sm">
      <Lines centeredRange={allowNegativeValues} areLabelsShown={hovered} />
      {data.map(({ label, allowNegativeValues = false, defaultValue }, i) => {
        return (
          <Stack align="center" key={i}>
            <Text size="xs" fw="normal" w={42} ta="center" lh="1.2">
              {label.toUpperCase()}
            </Text>
            <JunoSlider allowNegativeValues={allowNegativeValues} defaultValue={defaultValue} />
          </Stack>
        );
      })}
    </Group>
  );
};

export default JunoSliderGroup;

const LineLabel = ({ children }: { children: string | ReactNode }) => (
  <Text size="xs">{children}</Text>
);

const fullRangeLines: HighlightedLine[] = [
  { label: <LineLabel>0</LineLabel>, position: 0 },
  { label: <LineLabel>5</LineLabel>, position: 5 },
  { label: <LineLabel>10</LineLabel>, position: 10 },
];
const centeredRangeLines: HighlightedLine[] = [
  {
    label: <IconMinus size={12} stroke={3} />,
    position: 0,
  },
  { label: <LineLabel>0</LineLabel>, position: 5 },
  {
    label: <IconPlus size={12} stroke={3} />,
    position: 10,
  },
];

const LineLabelContainer = ({ mounted, children }: { mounted: boolean; children: ReactNode }) => (
  <Transition mounted={mounted} keepMounted duration={150} timingFunction="ease">
    {(style) => (
      <div
        style={{ width: 'calc(100% + 38px)', ...style }}
        className="absolute flex items-center justify-between"
      >
        <Group w={14} justify="end" ta="right">
          {children}
        </Group>
        <Group w={14} ta="left">
          {children}
        </Group>
      </div>
    )}
  </Transition>
);

const Lines = ({
  centeredRange,
  areLabelsShown,
}: {
  centeredRange: boolean;
  areLabelsShown: boolean;
}) => {
  const boldLines = centeredRange ? centeredRangeLines : fullRangeLines;
  return (
    <Stack
      gap={0}
      pos="absolute"
      bottom={0}
      w="100%"
      justify="space-between"
      h={SLIDER_HEIGHT}
      py={SLIDER_Y_PADDING}
      align="center"
    >
      {Array.from(Array(11).keys())
        .sort((a, b) => b - a)
        .map((k) => {
          const highLightedLine = boldLines.find((line) => line.position === k);
          return (
            <div
              key={k}
              style={{
                height: highLightedLine ? 3 : 1,
                backgroundColor: 'var(--mantine-color-gray-5)',
                width: '100%',
              }}
              className="relative m-0 flex w-full items-center justify-center"
            >
              {highLightedLine && (
                <LineLabelContainer mounted={areLabelsShown}>
                  {highLightedLine.label}
                </LineLabelContainer>
              )}
            </div>
          );
        })}
    </Stack>
  );
};
