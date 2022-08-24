

import {v4 as uuidv4} from 'uuid'
import {Articles,ICart} from './interfaces'
export class Carts implements ICart {
    #_id: string;
    #_order!: Articles[];
    #_total!:number;
    #_ispaid!:boolean;
    get isPaid():boolean{
        return this.#_ispaid;
    }
    get id():string{
        return this.#_id ;
    }
    get total():number{
        this.#_total = this.#_order.reduce((accumulator, object) => {
            return accumulator + (object.quantity! * object.price);
          }, 0);
        return this.#_total ;
    } 

    get order():Articles[]{
        return this.#_order;
    }
    set order(order :Articles[]){
        this.#_order = order;
    }

    public paid():void{

        if(this.#_ispaid)
        return;

        this.#_ispaid = true

    }
    public bill(){

        //if(this.#_ispaid)
        return this;

        

    }
     constructor() {
       
        this.#_id = uuidv4(); 
        this.#_ispaid = false;
        this.#_order = [];
     }


 }