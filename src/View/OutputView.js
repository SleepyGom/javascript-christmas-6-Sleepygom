import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Message";
import Calculate from "../Service/Calculate";
import format from "../Service/format";
import { STARDAY } from "../Constants/Constant";
import Calender from "../Service/Calendar";

const OutputView = {
    printMenu(menu) {
        Console.print(MESSAGE.ORDER);
        for(let i= 0; i < menu.length; i++){
            Console.print(`${menu[i][0]} ${menu[i][1]}개`)
        }
    },

    printBeforeDiscount(menu){
        Console.print(MESSAGE.BEFORE_DISCOUNT)
        const price = Calculate.beforeDiscount(menu)
        Console.print(`${format(price)}원`)
        return price
    },
    
    printGift(value){
        Console.print(MESSAGE.PRESENT)
        if(value >= 120000 ){
            Console.print('샴페인 1개')
        }
        else{
            Console.print('없음')
        }
    },

    printBenefit(date, menu){
        Console.print(MESSAGE.BENEFIT)
        const discount = Calculate.calcDiscount(date,menu)
        const totalPrice = Calculate.beforeDiscount(menu)
        const checkdate = new Calender()
        const dateArr = checkdate.printMapgging(date)

        if(discount[0]){
            Console.print(`${MESSAGE.DDAYDIS}${format(discount[0])}원`)
        }
        if(discount[1] !== 0){
            if(dateArr[1] === "FRI" || dateArr[1] === 'SAT'){
                Console.print(`${MESSAGE.WEEKENDDIS}${format(discount[1])}원`)
            }
            else{
                Console.print(`${MESSAGE.WEEKDAYDIS}${format(discount[1])}원`)
            }
        }
        if(STARDAY.includes(Number(date))){
            Console.print(`${MESSAGE.SPECIALDIS}${format(discount[2])}원`)
        }
        if(totalPrice >= 120000){
            Console.print(`${MESSAGE.PRESNETDIS}25,000원`)
        }
        if(discount[0] === 0 && discount[1] === 0 && discount[2] === 0 && totalPrice < 12000){
            Console.print('없음')
        }
    },

    printTotalDiscount(date,menu){
        Console.print(MESSAGE.TOTAL_BENEFIT_AMOUNT)
        const discount = Calculate.calcDiscount(date,menu)
        let total = 0
        for(let i = 0; i < discount.length; i++){
            total += discount[i]
        }
        if(total === 0){
            Console.print(`${format(total)}원`)
        }
        else{
            Console.print(`-${format(total)}원`)
        }
        return total
    },
    
    printAfterPrice(before, discount){
        Console.print(MESSAGE.DISCOUNT_TOTAL_AMOUNT)
        Console.print(`${format(before-discount)}원`)
    },

    printBadge(menu){
        Console.print(MESSAGE.BADGE)
        const price = Calculate.beforeDiscount(menu)
        switch(price){
            case price >= 20000:
                Console.print('산타')
                break
            case price >= 10000:
                Console.print('트리')
                break
            case price >= 5000:
                Console.print('별')
                break
            default:
                Console.print('없음')
                break
        }
    },

    printAll(menu, date){
        OutputView.printMenu(menu)
        const original = OutputView.printBeforeDiscount(menu)
        OutputView.printGift(original)
        OutputView.printBenefit(date,menu)
        const discount = OutputView.printTotalDiscount(date, menu)
        OutputView.printAfterPrice(original, discount)
        OutputView.printBadge(menu)
    }
}

export default OutputView;