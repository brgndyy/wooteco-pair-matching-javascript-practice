import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Validator from './validator/Validator.js';

class App {
  #featureNumberValue;

  #courseAndLevelAndMission;

  async play() {
    await asyncFunctionHandlerWithError(this.#readInitialFeature, this);
    await asyncFunctionHandlerWithError(this.#selectCourseAndLevelAndMission, this);
  }

  async #readInitialFeature() {
    this.#featureNumberValue = await InputView.readFeature();
    Validator.validateInitialFeature(this.#featureNumberValue);

    OutputView.divideLine();
  }

  async #selectCourseAndLevelAndMission() {
    this.#courseAndLevelAndMission = await InputView.selectCourseAndLevelAndMission();
    Validator.validateCourseAndLevelAndMission(this.#courseAndLevelAndMission);

    OutputView.divideLine();
  }
}

export default App;
