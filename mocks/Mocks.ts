
import green from "../assets/produtores/green.png";
import grow from "../assets/produtores/grow.png";
import jenny_jack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";
import salad from "../assets/produtores/salad.png";

function RandomNumber(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


export interface IProdutor {
    imagem: any,
    nome: string,
    estrelas: number,
    distancia: number
}

export interface IAppMocks {
    titulo: string,
    usuario: string,
    produtores: IProdutor[]
}

const Mocks: IAppMocks = {
    titulo: "Encontre os melhores produtores",
    usuario: "Luisa",
    produtores: [
        {
            nome: "Green",
            imagem: green,
            distancia: RandomNumber(0, 500),
            estrelas: RandomNumber(1, 5)
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: RandomNumber(0, 500),
            estrelas: RandomNumber(1, 5)
        },
        {
            nome: "Jenny Jack",
            imagem: jenny_jack,
            distancia: RandomNumber(0, 500),
            estrelas: RandomNumber(1, 5)
        },
        {
            nome: "Potagger",
            imagem: potager,
            distancia: RandomNumber(0, 500),
            estrelas: RandomNumber(1, 5)
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: RandomNumber(0, 500),
            estrelas: RandomNumber(1, 5)
        },
        
    ]
}

export default Mocks;