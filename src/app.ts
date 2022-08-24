import {Articles,Shop} from './interfaces'
import {Carts} from './class.Carts'
import {User} from './class.User'
import { Modal } from 'bootstrap';

const signon : HTMLElement = <HTMLElement>document.querySelector("#signon");
const main : HTMLElement = <HTMLElement>document.querySelector("#main");

const myModalEl: HTMLElement = <HTMLElement>document.querySelector("#exampleModalFullscreenXxl")
const signon__modal:Modal= <Modal>new Modal(myModalEl);



signon.addEventListener('submit',(e:Event):void=> {
    e.preventDefault();
    const form = <HTMLElement>e.currentTarget;
 
    signon__modal.dispose()
    myModalEl.classList.remove('show')
    main.classList.remove("d-none");
    myModalEl.parentElement?.removeChild(myModalEl)    
})
const g = new User('jawad','lakrary')

const articles : Articles[]  = [
    <Articles>{id:1,name:"test1",price:15},
    <Articles>{id:2,name:"test2",price:10}
]
const shop :Shop ={items:articles};
const j : Carts = new Carts();
/* const k = new Carts()
k.order = articles;
k.paid(); 
g.cart?.push(<Carts>l.bill())
console.log(g) */
const addToCart : (id : number)=> void = (id : number) :void  => {
   
    if(id)
    { 
        
        let c : Articles = <Articles>j.order?.find( el => el.id == id);
        if(c)
        {        
            if(c.quantity)
            c.quantity++;
            else
            c.quantity = 1;
        }
        else
        {
            const a = {...<Articles>shop.items?.find( el => el.id == id),quantity:1};
            j.order?.push(a)
            g.cart.push(j)
        }
        let offc = <HTMLElement>document.querySelector("#offcanvasShop .offcanvas-body")
        let ncol1: HTMLElement = document.createElement("div");
        let ncol2: HTMLElement = document.createElement("div");
        let ncol3: HTMLElement = document.createElement("div");



        console.log(j);
        console.log(g);
    }

}


const removeFromCart : (id : number)=> void = (id : number) :void  => {
   
    if(id)
    { 
        
        let c : Articles = <Articles>j.order?.find( el => el.id ==id);
        if(c)
        {        
            if(c.quantity)
            {
                if(c.quantity>1)
                {
                    c.quantity--;
                }
    
                else
                {
                    j.order?.splice(<number>j.order?.findIndex( el => el.id == id),1)

                }

            }

            
        }
        console.log(j);
        console.log(g);
    }

}


const createArticleList:()=> void = () :void =>{
    shop.items?.forEach((el)=> {
        let ncard : HTMLElement = document.createElement("div");
        ncard.classList.add("card__");
        let ncardheader : HTMLElement = document.createElement("div");
        ncardheader.classList.add("card-header");
        let ncardpicture : HTMLElement = document.createElement("div");
        ncardpicture.classList.add("card__picture");
        let ncardpictureoverlay : HTMLElement = document.createElement("div");
        ncardpictureoverlay.classList.add("card__picture-overlay");
        let ncardpictureimg : HTMLElement = document.createElement("img");
        ncardpictureimg.classList.add("card__picture-img");
        ncardpictureimg.setAttribute('src',"./img/img_prd.jpeg")
        ncardpicture.append(ncardpictureoverlay)
        ncardpicture.append(ncardpictureimg)
        ncardheader.append(ncardpicture)
        let ncardbody : HTMLElement = document.createElement("div");
        ncardbody.classList.add("card__body");
        let ncardfooter : HTMLElement = document.createElement("div");
        ncardfooter.classList.add("card__footer");
        let nrow: HTMLElement = document.createElement("div");
        nrow.classList.add("row");
        let ncol1: HTMLElement = document.createElement("div");
        let ncol2: HTMLElement = document.createElement("div");
        let ncol3: HTMLElement = document.createElement("div");
        ncol1.classList.add("col-8");
        ncol1.innerHTML = el.name;
        ncol2.classList.add("col-2");
        ncol2.innerHTML = el.price.toString();    
        let addBtn: HTMLButtonElement = document.createElement("button");
        addBtn.classList.add("button-5"); 
        addBtn.innerHTML = "Add";
        //let remBtn: HTMLButtonElement = document.createElement("button");
        //remBtn.classList.add("btn","btn-danger");
        //remBtn.innerHTML = "-"; 
        addBtn.addEventListener('click',():void=> addToCart(el.id))
        //remBtn.addEventListener('click',():void=> removeFromCart(el.id))
        //ncol3.append(addBtn,remBtn)
        ncol3.append(addBtn)

        ncardfooter.append(ncol3)
        nrow.append(ncol1,ncol2)
        ncardbody.append(nrow)        
        ncard.append(ncardheader)
        ncard.append(ncardbody)
        ncard.append(ncardfooter)


        let shop : HTMLElement = <HTMLElement>document.querySelector("#shop");
        if(shop)
        shop.append(ncard)


    })
}


createArticleList();






