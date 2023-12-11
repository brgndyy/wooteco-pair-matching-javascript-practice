import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  read_features: '기능을 선택하세요.\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
});

export default PROGRESS_MESSAGE;
