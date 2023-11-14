import { Console } from "@woowacourse/mission-utils";
import InputView from "../View/InputView";
import { MESSAGE } from "../Constants/Message";
import OutputView from "../View/OutputView";

export default class Controller{
    #date = 0;
    #menu = [];


    constructor(){
        this.#date;
        this.#menu;
    }

    async checking(){
        Console.print(MESSAGE.GREETING)
        this.#date = await InputView.getDate()
        this.#menu = await InputView.getMenu()
        Console.print(`12월 ${this.#date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`)
        OutputView.printAll(this.#menu, this.#date)
    }
}