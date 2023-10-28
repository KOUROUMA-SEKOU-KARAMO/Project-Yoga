import {  pages } from "../index.js";

export let basicArray=[
    {pic:0,min:1},
    {pic:1,min:1},
    {pic:2,min:1},
    {pic:3,min:1},
    {pic:4,min:1},
    {pic:5,min:1},
    {pic:6,min:1},
    {pic:7,min:1},
    {pic:8,min:1},
    {pic:9,min:1},
]
export let exerciceArraw=[];

(()=>{
     if(localStorage.exercices){
         exerciceArraw=JSON.parse(localStorage.exercices);
     }else[
         exerciceArraw=basicArray
     ]
})();

/**
 *    all useful functions 
 */


export const   usefulFunctions={
     /**
      * 
      * @param {string} title 
      * @param {string} content 
      * @param {string} btn 
      */
    pagesContent:function(title,content,btn ){
         document.querySelector('h1').innerHTML=title;
          document.querySelector('main').innerHTML=content;
          document.querySelector('.container-btn').innerHTML=btn;
        
    },

    handleInput:function(){

           document.querySelectorAll("input[type='number']").forEach((input)=>{
              input.addEventListener('input',function(e){
                  exerciceArraw.map((exo)=>{
                     if(e.target.id==exo.pic){
                        exo.min=parseInt(e.target.value);
                        usefulFunctions.store();

                     }
                  })

                
              })
           })
    },


    handleMoveEvent:function(){
        document.querySelectorAll(".arrow").forEach(element => {
            element.addEventListener('click',function(e){
                let position=0
                exerciceArraw.map((exo)=>{
                   if(exo.pic==e.target.dataset.pic && position!==0){
                       [exerciceArraw[position],exerciceArraw[position-1]]=[exerciceArraw[position-1],exerciceArraw[position]];
                        
                       pages.loby()
                     usefulFunctions.store();

                   }else{
                     position++
                   }
                })

              
            })
        });
    },
     
    handleDelete:function(){
        document.querySelectorAll(".deleteBtn").forEach((btnDelete)=>{
            btnDelete.addEventListener('click',function(e){
                 let  newArray=[];
                 e.target.parentElement.remove();
                 exerciceArraw.map((exo)=>{
                     if(exo.pic!=e.target.dataset.pic){
                        newArray.push(exo)
                    }
                });
                exerciceArraw=newArray;
                usefulFunctions.store();

                pages.loby()
                
                    

             })

        })
    },

    store:function(){
        localStorage.exercices=JSON.stringify(basicArray)
    }  ,

    reboot:function(){
         exerciceArraw=basicArray
         pages.loby()
    }
    
}