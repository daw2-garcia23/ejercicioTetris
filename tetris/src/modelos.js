export const modelos = [
    {
        modelo: 1,
        nombre: 'Palo',
        color: 'bg-primary',
        matriz:[
            [
                [1,1,1,1]
            ],
            [
                [1],
                [1],
                [1],
                [1],
            ],
            [
                [1,1,1,1]
            ],
            [
                [1],
                [1],
                [1],
                [1],
            ]
        ]
    },
    {
        modelo: 2,
        nombre: 'Cuadrado',
        color: 'bg-danger',
        matriz: [
            [
                [1,1],
                [1,1]
            ],
            [
                [1,1],
                [1,1]
            ],
            [
                [1,1],
                [1,1]
            ],
            [
                [1,1],
                [1,1]
            ]

        ]

    },
    {
        modelo: 3,
        nombre:'L',
        color: 'bg-secondary',
        matriz:[
            [
                [1,0,0],
                [1,1,1]
            ],
            [
                [1,1],
                [1,0],
                [1,0]
            ],
            [
                [1,1,1],
                [0,0,1]
            ],
            [
                [0,1],
                [0,1],
                [1,1]
            ]

        ]

    },
    {
        modelo: 4,
        nombre:'L2',
        color: 'bg-dark',
        matriz:[
            [
                [0,0,1],
                [1,1,1]
            ],
            [
                [1,0],
                [1,0],
                [1,1]
            ],
            [
                [1,1,1],
                [1,0,0]
            ],
            [
                [1,1],
                [0,1],
                [0,1]
            ]

        ]

    },
    {
        modelo: 5,
        nombre: 'Triple',
        color: 'bg-warning',
        matriz: [
            [
                [0,1,0],
                [1,1,1]
            ]
            [
                [1,0],
                [1,1],
                [1,0]
            ],
            [
                [1,1,1],
                [1,0,1]
            ],
            [
                [0,1],
                [1,1],
                [0,1]
            ]

        ]
    },
    {
        modelo: 6,
        nombre: 'Serpiente',
        color: 'bg-success',
        matriz: [
            [
                [1,1,0],
                [0,1,1]
            ],
            [
                [0,1],
                [1,1],
                [1,0]
            ],
            [
                [1,1,0],
                [0,1,1]
            ],
            [
                [0,1],
                [1,1],
                [1,0]
            ]
        ]
    },
    {
        modelo: 7,
        nombre: 'Serpiente2',
        color: 'bg-info',
        matriz: [
            [
                [0,1,1],
                [1,1,0]
            ],
            [
                [1,0],
                [1,1],
                [0,1]
            ],
            [
                [0,1,1],
                [1,1,0]
            ],
            [
                [1,0],
                [1,1],
                [0,1]
            ]
        ]
    }
]

export class ModeloPieza{ //creo la clase de ModeloPieza

    constructor(modelo,angulo=0,x=0,y=0){
    console.log("He creado el constructor de ModeloPieza")

     this.modelo = modelo
     this.angulo = angulo
     this.matriz = modelos.matriz
     this.x = x
     this.y = y
     this.longitud = this.matriz.length
     this.altura = this.matriz.length
        console.log('esto esa de locos')
    }

    girar(angulo){ //creamos la función de girar
        if(angulo >= 0 && angulo < 3){
            angulo++
        }
    }
   
}