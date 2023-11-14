export default class SplitMenu{
    #splitArr;

    constructor(){
        this.#splitArr;
    }

    splitMenu(menu){
        const createArr = [...menu.split(',')];
        const easyArr = createArr.map((e)=> e.split('-'))
        this.#splitArr = easyArr
        return this.#splitArr
    }
} 