import { ModeloPieza } from "./modelos.js"

export const panel={
        matriz:[
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1]
        ] ,

        pintaPanel: ()=>{
            var html = "" //inicializo una variable
            for(let i=0;i<panel.matriz.length;i++){ //creo un for que me recorra las filas del array, en total serán 22
                html+=`<div class="p-fila">` //genero divs y las guardo en la variable
                console.log("Se han creado las filas")
                
                for(let j=0;j<panel.matriz[i].length;j++){ //ahora recorro la array para saber las columnas
                    html+=`<div class="celda"></div>`  //a la misma variable, ahora se las inyecto
                      console.log("Se han creado las celdas")
                }
                html +=  `</div>` //cierro el div de panel
            }
            document.querySelector('#panel').innerHTML=html  //inyecto todo el código en el div con id de panel

        }, 

        crearNuevaPieza: ()=>{
            //creamos la instancia de la clase ModeloPieza
            const nuevaPieza = new ModeloPieza('aleatorio',0,'aleatorio',1) 
            console.log(nuevaPieza)

        }

 
        
        
}






