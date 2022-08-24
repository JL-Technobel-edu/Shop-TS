import {IUser,ICart} from './interfaces'
export class User implements IUser {
    #_firstName: string;
    #_lastName: string;
    cart!:ICart[];
    get firstName():string{

        return this.#_firstName;
    }
    get lastName():string{

        return this.#_lastName;
    }
     constructor(firstName: string,
         lastName: string) {
            this.#_firstName = firstName;
            this.#_lastName = lastName;
            this.cart = [];
     }


 }