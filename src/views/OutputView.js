import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiters/delimiter.js';

const OutputView = {
  printMatchingResult(matchingResult) {
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
