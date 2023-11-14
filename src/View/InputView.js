import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Message";
import Validate from "../Service/Validate";
import SplitMenu from "../Service/SplitMenu"

const InputView = {
    async getDate() {
        Console.print(MESSAGE.RESERVATION_INPUT)
        const input = await Console.readLineAsync(MESSAGE.RESERVATION_INPUT);
        Validate.validDate(input)
        Console.print(input)
        return input
    },

    async getMenu(){
        Console.print(MESSAGE.GETMENU_INPUT)
        const input = await Console.readLineAsync(MESSAGE.GETMENU_INPUT)
        Console.print(input)
        const split = new SplitMenu()
        const splitArr = split.splitMenu(input)
        Validate.validMenu(splitArr)
        return splitArr
    }  
    
}

export default InputView;