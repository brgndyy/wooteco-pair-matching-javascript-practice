import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  not_validate_value: '유효하지 않은 값이에요! 다시 입력해주세요.',
  invalid_course: '코스 입력값이 존재하지 않아요 !',
  invalid_level: '레벨 입력값이 존재하지 않아요!',
  invalid_mission: '미션 입력값이 존재하지 않아요!',
  invalid_response: '올바른 응답값을 입력해주세요!',
});

export default ERROR_MESSAGES;
