import { ColourPickerComponent } from "../components/colour-picker/colour-picker.component";

export class Shirt {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public imagePath: string = '',
        public gender?: 'M' | 'F',
        public shirtColour: Colour = { name: 'white', value: "#FFFFFF" },
        public shirtStyle: string = '',
        public graphic: Graphic =
            { name: "", colour: { name: "", value: ""}, fileName: "" },
        public text: Text = {
            value: '',
            colour: { name: 'black', value: '#444444'}, 
            font: '"Montserrat", sans-serif'
        },
        public canvasJSON: Object = ''
    ) {}
}

export interface Text {
    value: string,
    colour: Colour,
    font: string
}

export interface Graphic {
    name: string,
    colour?: Colour,
    fileName: string
}

export interface Colour {
    name: string,
    value: string
}
