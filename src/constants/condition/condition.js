import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  pair_matching: 1,
  check_pair_matching: 2,
  initialize_pair: 3,
  quit_program: 'Q',
  yes: '네',
  no: '아니오',
});

export default CONDITION;
