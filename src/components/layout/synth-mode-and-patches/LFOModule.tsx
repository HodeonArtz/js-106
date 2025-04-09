import JunoSliderGroup, { SliderData } from '../gen/JunoSliderGroup';
import ModuleBox from '../gen/ModuleBox';

const LFOModule = () => {
  const data: SliderData[] = [{ label: 'Rate', defaultValue: 145 }, { label: 'Delay time' }];
  return (
    <ModuleBox title="LFO">
      <JunoSliderGroup data={data} />
    </ModuleBox>
  );
};

export default LFOModule;
