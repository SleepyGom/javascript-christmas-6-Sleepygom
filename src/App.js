import { Console } from "@woowacourse/mission-utils";
import { MENU } from "./Constants/Constant";
import InputView from "./View/InputView";
import { MESSAGE } from "./Constants/Message";
import Calender from "./Service/Calendar";
import Controller from "./Controller/Controller";

class App {
  #controller;

  constructor(){
    this.#controller = new Controller
  }

  async run() {
    try{
      await this.#controller.checking();
    }
    catch(error){
      Console.print(error.message)
    }
  }
}

export default App;
