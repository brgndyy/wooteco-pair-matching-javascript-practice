import { Random } from '@woowacourse/mission-utils';

const shuffleStudentsIndexes = (indexArr) => {
  return Random.shuffle(indexArr);
};

export default shuffleStudentsIndexes;
