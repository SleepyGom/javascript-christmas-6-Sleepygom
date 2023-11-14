import { Console } from "@woowacourse/mission-utils";
import { MENU, STARDAY } from "../Constants/Constant";
import Calender from "./Calendar";

export default class Calculate{


    static beforeDiscount(menu){
        let price = 0
        for(let i = 0; i < menu.length; i++){
            const calcPrice = MENU[menu[i][0]]*menu[i][1]
            price += calcPrice
        }
        return price
    }

    static calcChristmas(date){
        if(date >= 1 && date <= 25){
            const discount = 1000 + ((date - 1) * 100)
            return discount
        }
        else{
            return 0
        }
    }

    static calcWeekday(date, menu){
        const mapping = new Calender()
        const dayArr = mapping.printMapgging(date)
        const main = ["티본스테이크", "바비큐립", "해산물파스타", "크리스마스파스타"]
        const dessert = ["초코케이크", "아이스크림"]
        let checkCount = 0
        if(dayArr[1] === 'FRI' || dayArr[1] === 'SAT'){
            for(let i=0; i < menu.length; i++){
                const menuName = menu[i][0]
                if(main.includes(menuName)){
                    checkCount += 1 * menu[i][1]
                }
            }
        }
        else{
            for(let i=0; i < menu.length; i++){
                const dessertName = menu[i][0]
                if(dessert.includes(dessertName)){
                    checkCount += 1 * menu[i][1]
                }
            }
        }
        return checkCount * 2023
    }

    static checkStar(date){
        if(STARDAY.includes(Number(date))){
            return 1000
        }
        else{
            return 0
        }
    }

    static calcDiscount(date, menu){
        const christmasDiscount = this.calcChristmas(date)
        const weekDiscount = this.calcWeekday(date,menu)
        const starDiscount = this.checkStar(date)
        return [christmasDiscount, weekDiscount, starDiscount]
    }
}