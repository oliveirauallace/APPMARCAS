import React from "react";
import { View, FlatList} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import {NomedoProduto, DescricaodoProduto, PrecodoProduto, TextPromocional, NomeDetalhesProduto, 
EsquerdaDaMesmaLinha, Espacamento, Cabecalho, TextComentarios, ViewAvaliacao, 
ImageProdutoDetalhe, TextAvalicao, AutorDataAvalicao } from "../../assets/style";
import bancoProdutos from "../../assets/produtos.json";
import bancoComentarios from "../../assets/avaliacoes.json";
import LogoMarca from "../../assets/imgs/avatar.jpg";

const Paginas = 2;

export default class Detalhes extends React.Component {
    constructor(props) {
        super(props);

        const { feedId } = this.props.navigation.state.params;
        this.state = {
            feedId: feedId,
            feed: null,
            avaliacoescliente: [],
            proximaPagina: 1,
            atualizandoAvaliacoes: false
        }
    }

    componentDidMount = () => {
        this.carregarFeed();
        this.carregarAvaliacao();
    }

    carregarFeed = () => {
        const { feedId } = this.state;

        const feeds = bancoProdutos.feeds.filter((feed) => feed._id == feedId);
        this.setState({
            feed: feeds[0]
        });
    }

    carregarAvaliacao = () => {
        const { feedId, proximaPagina } = this.state;

        const avalicaoClientes = bancoComentarios.avaliacoescliente.filter((avalicaocliente) =>
            avalicaocliente.feed === feedId);

        let avaliacao = [];
        avalicaoClientes.map((avalicaocliente) => {
            if (avaliacao.length <= proximaPagina * Paginas) {
                avaliacao.push(avalicaocliente);
            }
        })

        this.setState({
            avaliacao: avaliacao,
            proximaPagina: proximaPagina + 1,
            atualizandoAvaliacoes: false
        });
    }

    exibirAvaliacao = (avaliacao) => {
        return (
            <View>
                <ViewAvaliacao>
                    <EsquerdaDaMesmaLinha>
                        <AutorDataAvalicao>{avaliacao.user.nome}</AutorDataAvalicao>
                        <AutorDataAvalicao>{avaliacao.diahora}</AutorDataAvalicao>
                    </EsquerdaDaMesmaLinha>
                    <TextAvalicao>"{avaliacao.avalicaocliente}"</TextAvalicao>
                </ViewAvaliacao>
                <Espacamento/>
            </View>
        );
    }

    render = () => {
        const { feed, avaliacao  } = this.state;

        if (feed) {
            return (
                <>
                    <Header leftComponent={
                        <Icon size={28} name="left" onPress={() => {this.props.navigation.goBack();}} />}
                        containerStyle={Cabecalho}
                    />
                    <ScrollView>
                        <View>
                            <ImageProdutoDetalhe source={LogoMarca}></ImageProdutoDetalhe>
                            <View style={{ padding: 8 }}>
                                <Espacamento />
                                <NomedoProduto>{feed.produto.nome}</NomedoProduto>  
                                <Espacamento />
                                <PrecodoProduto>{"Preço R$" + feed.produto.preco + " "}</PrecodoProduto> 
                                <Espacamento />
                                <PrecodoProduto>{"Preço Promocional* R$" + feed.produto.precopromocao + " "}</PrecodoProduto>
                                <Espacamento /> 
                                <Espacamento />
                                <Espacamento />
                                <NomeDetalhesProduto>Modo de utilização: </NomeDetalhesProduto>
                                <DescricaodoProduto>{feed.produto.modoutilizacao}</DescricaodoProduto> 
                                <Espacamento />
                                <NomeDetalhesProduto>Cuidados: </NomeDetalhesProduto>
                                <DescricaodoProduto>{feed.produto.cuidados}</DescricaodoProduto> 
                                <Espacamento />
                                <NomeDetalhesProduto>Tipos de superfícies: </NomeDetalhesProduto>
                                <DescricaodoProduto>{feed.produto.superficie}</DescricaodoProduto> 
                                <Espacamento />
                                <TextPromocional>* Preço Promocional acima de 4 unidades</TextPromocional> 
                            </View>
                        </View>
                        <TextComentarios>AVALIAÇÕES DO PRODUTO:</TextComentarios>
                        <FlatList
                            data={avaliacao}
                            onEndReached={() => { this.carregarAvaliacao() }}
                            keyExtractor={(item) => String(item._id)}
                            renderItem={({ item }) => {
                                return this.exibirAvaliacao(item)
                            }}
                        />
                    </ScrollView>
                </>
            );
        } else {
            return null;
        }
    }

}