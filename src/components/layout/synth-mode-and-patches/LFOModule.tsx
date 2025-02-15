import JunoSliderGroup, { SliderController } from '../gen/JunoSliderGroup';
import ModuleBox from '../gen/ModuleBox';

const LFOModule = () => {
  const controllers: SliderController[] = [{ label: 'Rate' }, { label: 'Delay time' }];
  return (
    <ModuleBox title="LFO">
      <JunoSliderGroup controllers={controllers} />
    </ModuleBox>
  );
};

export default LFOModule;
