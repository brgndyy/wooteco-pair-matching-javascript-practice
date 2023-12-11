import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import CONDITION from '../constants/condition/condition.js';

class Validator {
  static validateInitialFeature(feature) {
    const featureNumber = Number(feature);
    if (
      feature !== CONDITION.quit_program &&
      (!Number.isInteger(featureNumber) ||
        (featureNumber !== CONDITION.pair_matching &&
          featureNumber !== CONDITION.check_pair_matching &&
          featureNumber !== CONDITION.initialize_pair))
    ) {
      throw new AppError(ERROR_MESSAGES.not_validate_value);
    }
  }
}

export default Validator;
