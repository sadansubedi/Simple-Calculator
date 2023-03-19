

let display_value= "";
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
//console.log(buttons);
let clear = document.querySelector('.btn-clear');


for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        //console.log(buttontext);
        if(buttontext=='*'){
            display_value += buttontext;  // here display_value hold * ok
            screen.value = display_value;
            //console.log(display_value);
        }
        else if(buttontext =='C'){
            display_value = '';             
            screen.value = display_value;
        }
        else if (buttontext == '='){
            screen.value = eval(display_value);
            console.log(display_value);
        }
        else if(buttontext=='AC'){      
                display_value = display_value.slice(0,-1);
                screen.value = display_value;
        }
        else{
            display_value += buttontext;                  
            screen.value = display_value;
            //console.log(display_value);               //  here check display_value ,what it holds ok
        }
    })
}







