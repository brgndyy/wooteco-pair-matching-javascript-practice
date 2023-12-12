import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const OutputView = {
  printOriginalCourseAndMission() {
    Console.print(PROGRESS_MESSAGE.course_mission);
  },
  printMatchingResult(matchingResult) {
    Console.print(PROGRESS_MESSAGE.pair_matching_start);

    matchingResult.forEach((result) => {
      Console.print(result.join(' : '));
    });
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
