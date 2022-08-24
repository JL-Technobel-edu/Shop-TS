export type Articles = {
    id : number
    name: string;
    price: number;
    quantity?: number;
  };

export type Shop = {
    
    items?: Articles[];
};

export interface ICart {
    readonly id : string;
    order?: Articles[];
    total?:number;
    readonly isPaid?:boolean
};

export interface IUser {
    readonly firstName: string;
    readonly lastName: string;
    cart:ICart[];
 }
