import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Validator from './validator/Validator.js';

class App {
  async play() {
    await asyncFunctionHandlerWithError(this.#readInitialFeature, this);
  }

  async #readInitialFeature() {
    const feature = await InputView.readFeature();
    Validator.validateInitialFeature(feature);

    OutputView.divideLine();
  }
}

export default App;
