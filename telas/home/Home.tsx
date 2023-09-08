import React, { PropsWithChildren, useReducer, useState } from "react";
import { FlatList, GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Mocks, { IProdutor } from "../../mocks/Mocks";
import logo from "../../assets/logo.png";
import estrelaVerde from "../../assets/estrela.png";
import estrelaCinza from "../../assets/estrelaCinza.png";


function Topo(): JSX.Element {
    return <>
        <View style={estilos.topo}>
            <Image source={logo} style={estilos.logo} />
            <Text style={estilos.boasVindas}>Olá, {Mocks.usuario}</Text>
            <Text style={estilos.mensagem}>{Mocks.titulo}</Text>
        </View>
        <Text style={estilos.tituloProdutores}>Produtores</Text>
    </>
}

type EstrelasProps = {
    quantidade: number,
    grande: boolean,
    nomeProdutor: string,
    setEstrelasProdutor: (nomeProdutor: string, quantidade: number) => void
};

function Estrelas({ nomeProdutor, quantidade, grande, setEstrelasProdutor }: EstrelasProps): JSX.Element {

    const listaEstrelas = []

    for (let i = 0; i < 5; i++) {
        const imagem = quantidade > i ? estrelaVerde : estrelaCinza;
        const estilo = grande ? estilos.estrelaGrande : estilos.estrelaNormal;

        if (grande) {
            listaEstrelas.push(
                <TouchableOpacity onPress={() => setEstrelasProdutor(nomeProdutor, i + 1)}>
                    <Image source={imagem} style={estilo} />
                </TouchableOpacity>
            );
        }
        else {
            listaEstrelas.push(
                <Image source={imagem} style={estilo} />
            );
        }

    }

    return <View style={estilos.estrelas}>
        {listaEstrelas}
    </View>
}


type RenderItemProps = {
    produtor: IProdutor,
    nomeSelecionado: string,
    onSelecionado: (produtor: string) => void,
    setEstrelasProdutor: (nomeProdutor: string, quantidade: number) => void
};

function RenderItem({ produtor, nomeSelecionado, onSelecionado, setEstrelasProdutor }: RenderItemProps): JSX.Element {

    return <TouchableOpacity key={produtor.nome} style={estilos.produtorCard} onPress={() => onSelecionado(produtor.nome)}>
        <Image source={produtor.imagem} style={estilos.imgProdutor} />
        <View style={estilos.infoContainer}>
            <View>
                <Text>{produtor.nome}</Text>
                <Estrelas
                    nomeProdutor={produtor.nome}
                    grande={produtor.nome === nomeSelecionado}
                    quantidade={produtor.estrelas}
                    setEstrelasProdutor={setEstrelasProdutor} />
            </View>
            <Text style={estilos.distancia}>{`${produtor.distancia}m`}</Text>

        </View>
    </TouchableOpacity >

}

function Home(): JSX.Element {

    const [nomeSelecionado, setNomeSelecionado] = useState("");
    const [produtores, setProdutores] = useState(Mocks.produtores);

    function setEstrelasProdutor(nomeProdutor: string, quantidade: number) {
        const novosProdutores = produtores.map(item => {
            if (item.nome === nomeProdutor) {
                item.estrelas = quantidade;
            }
            return item;
        });

        setProdutores(novosProdutores);
        setNomeSelecionado("");
    }

    return (
        <FlatList
            data={produtores}
            renderItem={e => <RenderItem
                produtor={e.item}
                nomeSelecionado={nomeSelecionado}
                onSelecionado={setNomeSelecionado}
                setEstrelasProdutor={setEstrelasProdutor} />}
            ListHeaderComponent={Topo} />
    );
}

var estilos = StyleSheet.create({

    logo: {
        width: 100,
        height: 40,
        marginLeft: 8,
        padding: 5,
        marginTop: 10
    },
    topo: {
        backgroundColor: "#DCDCDC",
        height: 110,
    },
    boasVindas: {
        fontSize: 36,
        fontWeight: "bold",
        marginLeft: 8,
        padding: 5,
        color: "black"
    },
    mensagem: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
        padding: 5,
        color: "white"
    },
    tituloProdutores: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 8,
        padding: 5,
        color: "black"
    },
    produtorCard: {
        backgroundColor: "lightgray",
        flexDirection: "row",
        padding: 8,
        marginBottom: 8,
        marginHorizontal: 8,
        borderRadius: 5
    },
    imgProdutor: {
        width: 42,
        height: 42,
        borderRadius: 5
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        marginLeft: 5,
        textAlignVertical: "center"
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19,
        textAlignVertical: "center"
    },
    estrelaNormal: {
        marginTop: 5,
        width: 16,
        height: 16
    },
    estrelaGrande: {
        marginTop: 5,
        width: 42,
        height: 42
    },
    estrelas: {
        flexDirection: "row"
    }
});


export default Home;