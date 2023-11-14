import { Console } from "@woowacourse/mission-utils"
import { ERROR } from "../Constants/Message"
import { MENU } from "../Constants/Constant"

export default class Validate{


    static isNum(num){
        if(isNaN(Number(num))){
            throw new Error(ERROR.IS_NUM)
        }
        return num
    }

    static isRange(num){
        if(num < 1 || num > 31){
            throw new Error(ERROR.RANGE)
        }
        return num
    }

    static validDate(num){
        try{
            this.isNum(num)
            this.isRange(num)
        }
        catch(error){
            Console.print(error.message)
        }
    }

    static duplicateMenu(menu){
        const menuNames = new Set();

        for(let i=0; i < menu.length; i++){
            const menuName = menu[i][0]
            
            if(menuNames.has(menuName)){
                throw new Error(ERROR.DUPLICATE_MENU)
            }
        }
        return menu
    }

    static isMenu(menu){
        for(let i = 0; i < menu.length; i++){
            const menuName = menu[i][0]
            if(!MENU.hasOwnProperty(menuName)){
                throw new Error(ERROR.INVAILID_MENU)
            }
        }
    }

    static verifyQuantity(menu){
        for(let i=0; i < menu.length; i++ ){
            const quantity = menu[i][1];
            
            if (isNaN(quantity) || quantity < 1) {
                throw new Error(ERROR.MENU_NUM);
            }
        }
        return menu
    }

    static validMenu(menu){
        try{
            this.duplicateMenu(menu)
            this.isMenu(menu)
            this.verifyQuantity(menu)
        }
        catch(error){
            Console.print(error.message)
        }
    }
 
}