import { Group } from '@mantine/core';
import JunoSlider from '@/components/gen/JunoSlider';
import ModuleBox from '../gen/ModuleBox';

const LFOModule = () => {
  return (
    <ModuleBox title="LFO">
      <Group align="end" gap={0}>
        <JunoSlider label="Rate" />
        <JunoSlider label="Delay time" />
      </Group>
    </ModuleBox>
  );
};

export default LFOModule;
