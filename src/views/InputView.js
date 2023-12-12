import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiters/delimiter.js';

const InputView = {
  async readFeature() {
    const feature = await Console.readLineAsync(PROGRESS_MESSAGE.read_features);

    return feature;
  },

  async selectCourseAndLevelAndMission() {
    const courseAndLevelAndMissionString = await Console.readLineAsync(
      PROGRESS_MESSAGE.select_course_level_mission,
    );

    const [course, level, mission] = courseAndLevelAndMissionString
      .split(DELIMITER.comma)
      .map((info) => info.trim());

    return { course, level, mission };
  },
};

export default InputView;
