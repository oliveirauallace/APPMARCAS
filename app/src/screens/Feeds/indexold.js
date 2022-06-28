import React from "react";
import { View, FlatList } from "react-native";
import FeedCard from "../../components/FeedCard";
import feedEstatico from "../../assets/produtos.json";
import { Icon, Header } from "react-native-elements";
import { CentralizadoNaMesmaLinha, InputPesquisa, EspacamentoIcon } from "../../assets/style";

const Paginas = 4;

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feeds: [],
            proximaPagina: 1,
            atualizando: false,
            nomedoProduto: null,
            filtrando: false
        };
    }

    componentDidMount = () => {
        this.carregarFeeds();
    }

    carregarFeeds = () => {
        const feedsEstaticos = feedEstatico.feeds;
        const { proximaPagina, filtrando } = this.state;

        if (filtrando) {
            return;
        }

        const feeds = feedsEstaticos.filter((feed) =>
            feed._id <= proximaPagina * Paginas
        );

        this.setState({
            feeds: feeds,
            proximaPagina: proximaPagina + 1,
            atualizando: false
        });
    }

    atualizar = () => {
        this.setState(
            {
                feeds: [],
                proximaPagina: 1,
                atualizando: false,
                filtrando: false,
                nomedoProduto: ""
            }, () => { this.carregarFeeds(); }
        );
    }

    atualizarPesquisaNome = (nome) => {
        this.setState({
            nomedoProduto: nome
        });
    }

    buscarFeeds = () => {
        const feedsEstaticos = feedEstatico.feeds;
        const { nomedoProduto } = this.state;

        let feeds = feedsEstaticos.filter((feed) =>
            feed.produto.nome.toLowerCase().includes(
                nomedoProduto.toLowerCase()
            ));
        

        this.setState({
            feeds: feeds,
            atualizando: false,
            filtrando: true
        });
    }

    barradePesquisa = () => {
        const { nomedoProduto } = this.state;

        return (
            <CentralizadoNaMesmaLinha>
                <InputPesquisa
                    onChangeText={(nome) => {this.atualizarPesquisaNome(nome);}}
                    placeholder="Pesquisar por produto"
                    textAlign={'center'}
                    value={nomedoProduto}
                />
                <EspacamentoIcon/>
                <Icon color={'#154c79'} style={{ padding: 8}} size={30} name="search" onPress={() => {this.buscarFeeds()}}/>
            </CentralizadoNaMesmaLinha>
        );
    }

    render = () => {
        const { feeds, atualizando } = this.state;

        return(
            <>
            <Header containerStyle={{ backgroundColor: '#99ccff'}} centerComponent={this.barradePesquisa()}></Header>
            <FlatList
                data = {feeds}
                onEndReached = { () => { this.carregarFeeds() }}
                onRefresh = { () => { this.atualizar() }}
                refreshing = { atualizando }
                keyExtractor={(item) => String(item._id)}
                renderItem = {({item}) => { 
                    return (
                        <View style={{ width: '100%'}}>
                            <FeedCard feed={item} navegador={this.props.navigation}/>
                        </View>
                    )
                }}
            ></FlatList>
            </>
                
        );
    }
}