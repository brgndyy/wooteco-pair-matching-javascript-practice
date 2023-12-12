import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import CONDITION from '../constants/condition/condition.js';
import COURSE from '../database/course.js';
import LEVEL from '../database/level.js';
import MISSION from '../database/mission.js';

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

  static validateCourseAndLevelAndMission(courseAndLevelAndMission) {
    const { course, level, mission } = courseAndLevelAndMission;

    if (!COURSE.some((c) => c.course === course)) {
      throw new AppError(ERROR_MESSAGES.invalid_course);
    }
    if (!LEVEL.some((l) => l.title === level)) {
      throw new AppError(ERROR_MESSAGES.invalid_level);
    }
    if (!MISSION.some((m) => m.title === mission)) {
      throw new AppError(ERROR_MESSAGES.invalid_mission);
    }
  }
}

export default Validator;
