import React from "react";
import { TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import {ImageProduto, NomedoProduto, DescricaodoProdutoFeed, EsquerdaDaMesmaLinha} from "../../assets/style";
import LogoMarca from "../../assets/imgs/avatar.jpg";

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        const {feed, navegador} = this.props;
        this.state = {
            feed: feed,
            navegador: navegador
        };
    }


    render = () => {
        const {feed} = this.state;

        return(
            <>
                <TouchableOpacity onPress={ () => {
                    const { feed, navegador } = this.state;
                    navegador.navigate("Detalhes", { feedId: feed._id });
                }}>
                    <Card>
                        <ImageProduto source={LogoMarca}></ImageProduto>
                        
                            <EsquerdaDaMesmaLinha>
                                <NomedoProduto>{feed.produto.nome}  |  {"R$: " + feed.produto.preco}</NomedoProduto>
                            </EsquerdaDaMesmaLinha>
                       
                        <DescricaodoProdutoFeed>{feed.produto.descricao}</DescricaodoProdutoFeed>
                    </Card>
                   
                </TouchableOpacity>
                
            </>
            
        );
    }
}