import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const InputView = {
  async readFeature() {
    const feature = await Console.readLineAsync(PROGRESS_MESSAGE.read_features);

    return feature;
  },
};

export default InputView;
