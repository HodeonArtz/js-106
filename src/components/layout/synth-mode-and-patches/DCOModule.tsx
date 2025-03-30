import JunoButtonRadioGroup from '../gen/JunoButtonRadioGroup';
import JunoSliderGroup from '../gen/JunoSliderGroup';
import ModuleBox from '../gen/ModuleBox';

const DCOModule = () => {
  return (
    <ModuleBox title="DCO">
      <JunoButtonRadioGroup
        groupLabel="range"
        controllers={
          [
            { label: "16'", value: 16 },
            { label: "8'", value: 8 },
            { label: "4'", value: 4 },
          ] as const
        }
        defaultValue={16}
      />
      <JunoSliderGroup
        controllers={[
          { label: 'LFO', allowNegativeValues: true, defaultValue: 128 },
          { label: 'PWM' },
        ]}
      />
    </ModuleBox>
  );
};

export default DCOModule;
