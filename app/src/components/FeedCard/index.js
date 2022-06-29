import React from "react";
import { TouchableOpacity} from "react-native";
import { Card } from "react-native-elements";
import {ImageProduto, NomedoProduto, DescricaodoProdutoFeed, EsquerdaDaMesmaLinha} from "../../assets/style";
import LogoMarca from "../../assets/imgs/avatar.jpg";

import { getFeeds } from "../../api/index.old";

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            feed: this.props.feed,
            navegador: this.props.navegador,
        }
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
                                <NomedoProduto>{feed.product.name}  |  {"R$: " + feed.product.price}</NomedoProduto>
                            </EsquerdaDaMesmaLinha>
                       
                        <DescricaodoProdutoFeed>{feed.product.description}</DescricaodoProdutoFeed>
                    </Card>
                   
                </TouchableOpacity>
                
            </>
            
        );
    }
}