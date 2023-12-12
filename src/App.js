import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Validator from './validator/Validator.js';
import MatchingHistoryChecker from './services/MatchingHistoryChecker.js';
import PairMatchingMachine from './domain/PairMatchingMachine.js';
import CONDITION from './constants/condition/condition.js';

class App {
  #matchingHistory = [];

  #featureNumberValue;

  #courseAndLevelAndMission;

  #pairMatchingResult;

  async play() {
    await asyncFunctionHandlerWithError(this.#readInitialFeature, this);
    await asyncFunctionHandlerWithError(this.#selectCourseAndLevelAndMission, this);
    await this.#printPairMatchingResult();
  }

  async #readInitialFeature() {
    this.#featureNumberValue = await InputView.readFeature();
    Validator.validateInitialFeature(this.#featureNumberValue);

    OutputView.divideLine();
  }

  async #selectCourseAndLevelAndMission() {
    this.#courseAndLevelAndMission = await InputView.selectCourseAndLevelAndMission();
    Validator.validateCourseAndLevelAndMission(this.#courseAndLevelAndMission);

    if (
      MatchingHistoryChecker.checkMatchingHistoryExists(
        this.#matchingHistory,
        this.#courseAndLevelAndMission,
      ) &&
      (await this.#askForReMatch())
    )
      return;

    OutputView.divideLine();
  }

  async #askForReMatch() {
    OutputView.divideLine();
    const response = await asyncFunctionHandlerWithError(
      this.#confirmationPromptWithValidation,
      this,
    );
    return response === CONDITION.no;
  }

  async #confirmationPromptWithValidation() {
    const response = await InputView.confirmationPrompt();
    Validator.validateYesOrNo(response);
    return response;
  }

  #addMatchingResultToHistory(matchingResult) {
    this.#matchingHistory.push(matchingResult);
  }

  async #printPairMatchingResult() {
    this.#pairMatchingResult = PairMatchingMachine.generatePairMatchingResult(
      this.#courseAndLevelAndMission,
    );
    this.#addMatchingResultToHistory(this.#pairMatchingResult);

    OutputView.printMatchingResult(this.#pairMatchingResult.matchingResult);
    OutputView.divideLine();

    await this.play();
  }
}

export default App;
