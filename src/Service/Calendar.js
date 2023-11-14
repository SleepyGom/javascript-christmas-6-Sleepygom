import { Console } from "@woowacourse/mission-utils";
import { DAY } from "../Constants/Constant";
import { ERROR } from "../Constants/Message"

export default class Calender {
    #date
    #days
    #mapping

    constructor(){
        this.#date = Array.from({ length: 31 }, (_, i) => i + 1);
        this.#days = DAY
        this.#mapping = this.#createMapping()
    }

    #createMapping() {
        const mapping = {};
        this.#date.forEach((number, index)=>{
            mapping[number] = this.#days[index % this.#days.length]
        })

        return mapping
    }

    #getDay(num){
        return this.#mapping[num]
    }

    printMapgging(date){
        const checkDay = this.#getDay(date);
        return [date,checkDay]
    }
}