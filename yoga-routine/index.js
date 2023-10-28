
import {  exerciceArraw, usefulFunctions} from "./funcitons/function.js"



class Exercice{
     
}


export const pages={
      loby:function(){
                const mapExercice=exerciceArraw.map((exo)=>{
                 
                    return `
                        <li >
                        <div class="card-header">
                        
                                    <input type="number" id='${exo.pic}' min='1' max='10' value='${exo.min}'>
                                    <span>min</span>
                            
                                    </div>
                            <img src='./img/${exo.pic}.png' >
                            <i class="fas fa-arrow-alt-circle-left arrow "  data-pic=${exo.pic}></i>
                            <i class=" fas fa-times deleteBtn"  data-pic=${exo.pic}></i>
                        </li>
                    `
                }).join('')
                usefulFunctions.pagesContent(
                    `Paramétrage <i id='reboot' class="fa fa-undo"></i>`,
                    `
                    <ul > ${mapExercice}</ul>
                    `,
                    `
                    <button id="start">Commencer <i class="far fa-play-circle"></i></button>
                    `,
                );


                usefulFunctions.handleInput()
                usefulFunctions.handleMoveEvent()
                usefulFunctions.handleDelete()

                reboot.addEventListener('click',()=>usefulFunctions.reboot());

      },



      routine:function(){

        usefulFunctions.pagesContent(
          "Routine",'Exercice avec chrono ', null
        )
         
      },


        finish:function(){
            usefulFunctions.pagesContent(
                "C'est terminé!",
                `
                <button id="start">Recommencer </button>
                <button id="start"  class="btn-reboot">Réinintialiser <i class="fas fa-times"></i> </button>
                `
            )
        }
}



pages.loby()
