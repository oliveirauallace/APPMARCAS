import React from "react";
import { View, FlatList, Text, Modal, TextInput, Alert } from "react-native";
import { Header, Button } from "react-native-elements";

import { SliderBox } from "react-native-image-slider-box";
import CardView from "react-native-cardview";
import Swipeable from "react-native-swipeable-row";
import Icon from "react-native-vector-icons/AntDesign";
import Moment from "react-moment";

import {
    Avatar,
    NomeProduto,
    DescricaoProduto,
    PrecoProduto,
    Likes,
    NomeEmpresa,
    CentralizadoNaMesmaLinha,
    EsquerdaDaMesmaLinha,
    Espacador,
    Cabecalho,
    SecaoComentarios,
    ContenedorComentario,
    EspacadorComentario,
    AutorComentario,
    Comentario,
    DataComentario,
    ContenedorNovoComentario,
    DivisorComentario,
    ContenedorComentarioDoUsuario
} from "../../assets/styles";

import { IsSignedIn } from "../../components/Login";
import Compartilhador from "../../components/Compatilhador";
import { getFeed, getComentarios, comentariosIsAlive, adicionarComentario, removerComentario, getImagem, likesIsAlive, usuarioGostou, gostar, desgostar } from "../../api";

const COMENTARIOS_POR_PAGINA = 3;

export default class Detalhes extends React.Component {

    constructor(props) {
        super(props);

        const { feedId } = this.props.navigation.state.params;
        this.state = {
            feedId: feedId,
            feed: null,
            comentarios: [],
            proximaPagina: 1,
            atualizandoComentarios: false,

            textoNovoComentario: null,
            telaNovoComentarioVisivel: false,
            comentariosIsAlive: false,

            usuario: null,
            usuarioGostou: false,
            likesIsAlive: false
        }
    }

    recuperarUsuarioLogado = () => {
        IsSignedIn().then((usuario) => {
            this.setState({
                usuario: usuario
            });
        }).catch((erro) => {
            console.log("erro recuperando usuário: " + erro);
        });
    }

    componentDidMount = () => {
        this.recuperarUsuarioLogado();

        this.carregarComentarios();
        this.carregarFeed();
    }

    verificarSeUsuarioGostou = () => {
        const { usuario, feedId } = this.state;

        if (usuario) {
            likesIsAlive().then((resposta) => {
                if (resposta.situacao === "yes") {
                    usuarioGostou(usuario, feedId).then((resultado) => {
                        this.setState({
                            usuarioGostou: resultado.likes > 0,
                            likesIsAlive: true
                        });
                    });
                } else {
                    this.setState({
                        likesIsAlive: false
                    }, () => {
                        Alert.alert("", 
                            "Opção de curtir desabilitada no momento")
                    });
                }
            })
        }
    }

    carregarFeed = () => {
        const { feedId } = this.state;
        console.log("recuperando o feed: " + feedId);

        getFeed(feedId).then((umFeed) => {
            this.setState({
                feed: umFeed
            }, () => {
                this.verificarSeUsuarioGostou();
            });
        }).catch((erro) => {
            console.error("ocorreu um erro recuperando o feed:", erro);
        });

    }

    carregarComentarios = () => {
        const { feedId, proximaPagina, comentarios } = this.state;

        comentariosIsAlive().then((resposta) => {
            if (resposta.situacao === "yes") {
                getComentarios(feedId, proximaPagina, COMENTARIOS_POR_PAGINA).then((novosComentarios) => {
                    this.setState({
                        comentarios: [...comentarios, ...novosComentarios],
                        proximaPagina: proximaPagina + 1,
                        atualizandoComentarios: false,
                        comentariosIsAlive: true
                    });
                }).catch((error) => {
                    console.error("ocorreu um erro carregando comentários:", error);
                })
            } else {
                this.setState({
                    comentariosIsAlive: false
                });
            }
        })
    }

    mostrarSlides = () => {
        const { feed } = this.state;
        const slides = feed.product.blobs.map((blob) => {
            return getImagem(blob.file);
        });

        return (
            <SliderBox
                dotColor={"#ffad05"}
                inactiveDotColor={"#5995ed"}

                resizeMethod={"resize"}
                resizeMode={"cover"}

                dotStyle={{
                    width: 15,
                    height: 15,

                    borderRadius: 15,
                    marginHorizontal: 5
                }}

                images={slides} />
        )
    }

    atualizarComentarios = () => {
        this.setState({
            comentarios: [],
            atualizandoComentarios: true,
            proximaPagina: 1
        }, () => {
            this.carregarComentarios();
        });
    }

    confirmarRemocao = (comentario) => {
        Alert.alert(
            "Comentários",
            "Remover o seu comentário?",
            [
                { text: "Não", style: "cancel" },
                {
                    text: "Sim", onPress: () => {
                        removerComentario(comentario._id).then((resultado) => {
                            if (resultado.situacao === "ok") {
                                this.atualizarComentarios();
                            }
                        }).catch((erro) => {
                            console.error("erro removendo comentario:", erro);
                        });
                    }
                }
            ]
        )
    }

    mostrarComentarioDoUsuario = (comentario) => {
        return (
            <Swipeable
                rightButtonWidth={55}
                rightButtons={
                    [
                        <View style={{ padding: 13 }}>
                            <Icon name="delete" color="#030303" size={28}
                                onPress={() => {
                                    this.confirmarRemocao(comentario);
                                }} />
                        </View>
                    ]
                }
            >
                <ContenedorComentarioDoUsuario>
                    <Comentario>{comentario.content}</Comentario>
                    <EsquerdaDaMesmaLinha>
                        <AutorComentario>{comentario.user.name}</AutorComentario>
                        <DataComentario>
                            <Moment element={Text} parse="YYYY-MM-DD HH:mm"
                                format="DD/MM/YYYY HH:mm">
                                {comentario.datetime}
                            </Moment>
                        </DataComentario>
                    </EsquerdaDaMesmaLinha>
                </ContenedorComentarioDoUsuario>
                <EspacadorComentario />
            </Swipeable>);
    }

    mostrarComentario = (comentario) => {
        const { usuario } = this.state;

        if (usuario && comentario.user.email === usuario.email) {
            return this.mostrarComentarioDoUsuario(comentario);
        }
        else {
            return (
                <View>
                    <ContenedorComentario>
                        <Comentario>{comentario.content}</Comentario>
                        <EsquerdaDaMesmaLinha>
                            <AutorComentario>{comentario.user.name}</AutorComentario>
                            <DataComentario>
                                <Moment element={Text} parse="YYYY-MM-DD HH:mm"
                                    format="DD/MM/YYYY HH:mm">
                                    {comentario.datetime}
                                </Moment>
                            </DataComentario>
                        </EsquerdaDaMesmaLinha>
                    </ContenedorComentario>
                    <EspacadorComentario />
                </View>
            );
        }
    }

    mostrarComentarios = () => {
        const { comentarios, atualizandoComentarios, comentariosIsAlive, usuario } = this.state;

        if (comentariosIsAlive) {
            if (comentarios.length) {
                return (
                    <>
                        <SecaoComentarios>Comentários</SecaoComentarios>
                        <FlatList
                            data={comentarios}

                            onEndReached={() => { this.carregarComentarios() }}
                            onEndReachedThreshold={0.2}

                            onRefresh={() => { this.atualizarComentarios() }}
                            refreshing={atualizandoComentarios}

                            keyExtractor={(item) => String(item._id)}
                            renderItem={({ item }) => {
                                return this.mostrarComentario(item)
                            }}
                        />
                    </>
                );
            } else {
                return (
                    <>
                        <CentralizadoNaMesmaLinha><Text>Nenhum comentário adicionado</Text></CentralizadoNaMesmaLinha>
                        {usuario && <CentralizadoNaMesmaLinha><Text>Seja o primeiro a comentar</Text></CentralizadoNaMesmaLinha>}
                        {usuario && <CentralizadoNaMesmaLinha>
                            <Text>Clique no ícone</Text>
                            <Icon style={{ padding: 5 }} size={22} name="message1" color={"#333"} />
                        </CentralizadoNaMesmaLinha>}
                    </>
                )
            }
        } else {
            return (
                <>
                    <CentralizadoNaMesmaLinha><Text>Comentários indisponíveis por enquanto</Text></CentralizadoNaMesmaLinha>
                    <CentralizadoNaMesmaLinha><Text>aguarde um momento</Text></CentralizadoNaMesmaLinha>
                </>
            )
        }
    }

    curtir = () => {
        const { usuario, feedId } = this.state;

        gostar(usuario, feedId).then((resultado) => {
            if (resultado.situacao === "ok") {
                this.carregarFeed();

                Alert.alert(
                    "",
                    "Obrigado pela sua avaliação"
                )
            }
        })
    }

    descurtir = () => {
        const { usuario, feedId } = this.state;

        desgostar(usuario, feedId).then((resultado) => {
            if (resultado.situacao === "ok") {
                this.carregarFeed();
            }
        })
    }

    atualizarNovoComentario = (texto) => {
        this.setState({
            textoNovoComentario: texto
        });
    }

    gravarComentario = () => {
        const { feedId, usuario, textoNovoComentario } = this.state;

        adicionarComentario(feedId, usuario, textoNovoComentario).then((resultado) => {
            if (resultado.situacao === "ok") {
                this.setState({
                    proximaPagina: 1,
                    comentarios: []
                }, () => {
                    this.atualizarComentarios();
                    this.mudarVisibilidadeNovoComentario();
                })
            }
        }).catch((erro) => {
            console.error("ocorreu um erro gravando o comentário: ", erro);
        })
    }

    mostrarNovoComentario = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}

                onRequestClose={
                    () => {
                        this.atualizarComentarios();
                    }
                }>
                <ContenedorNovoComentario>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        maxLength={256}

                        editable={true}

                        placeholder={"Digite o seu comentário"}

                        onChangeText={(texto) => {
                            this.atualizarNovoComentario(texto);
                        }} />
                    <DivisorComentario />
                    <Espacador />
                    <CentralizadoNaMesmaLinha>
                        <Button
                            icon={
                                <Icon name={"closecircle"} size={22} color="#fff" />
                            }

                            title=" Cancelar"
                            type="solid"

                            onPress={() => {
                                this.mudarVisibilidadeNovoComentario();
                            }}
                        />
                        <Espacador />
                        <Button
                            icon={
                                <Icon name={"check"} size={22} color="#fff" />
                            }

                            title=" Gravar"
                            type="solid"

                            onPress={() => {
                                this.gravarComentario();
                            }}
                        />
                    </CentralizadoNaMesmaLinha>
                    <Espacador />
                </ContenedorNovoComentario>
            </Modal>
        );
    }

    mudarVisibilidadeNovoComentario = () => {
        const { telaNovoComentarioVisivel } = this.state;

        this.setState({
            telaNovoComentarioVisivel: !telaNovoComentarioVisivel
        });
    }

    render = () => {
        const { feed, usuario, usuarioGostou, comentariosIsAlive, telaNovoComentarioVisivel, likesIsAlive } = this.state;

        if (feed) {
            return (
                <>
                    <Header
                        leftComponent={
                            <Icon size={28} name="left" onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        }

                        centerComponent={
                            <CentralizadoNaMesmaLinha>
                                <Avatar source={getImagem(feed.company.avatar)} />
                                <NomeEmpresa>{feed.company.name}</NomeEmpresa>
                            </CentralizadoNaMesmaLinha>
                        }

                        rightComponent={
                            <CentralizadoNaMesmaLinha>
                                <Compartilhador feed={feed} />
                                {usuario && likesIsAlive && !usuarioGostou && <Icon style={{ padding: 5 }} size={20} name="hearto" color={"#ff0000"}
                                    onPress={() => {
                                        this.curtir();
                                    }}
                                />}
                                {usuario && likesIsAlive && usuarioGostou && <Icon style={{ padding: 5 }} size={20} name="heart" color={"#ff0000"}
                                    onPress={() => {
                                        this.descurtir();
                                    }}
                                />}

                                {usuario && comentariosIsAlive && <Icon style={{ padding: 5 }} size={20} name="message1" color={"#333"}
                                    onPress={() => {
                                        this.mudarVisibilidadeNovoComentario();
                                    }}
                                />}
                            </CentralizadoNaMesmaLinha>
                        }

                        containerStyle={Cabecalho}
                    />
                    <CardView
                        cardElevation={2}
                        cornerRadius={0}>
                        {this.mostrarSlides()}
                        <View style={{ padding: 8 }}>
                            <Espacador />
                            <NomeProduto>{feed.product.name}</NomeProduto>
                            <DescricaoProduto>{feed.product.description}</DescricaoProduto>
                            <Espacador />
                            <EsquerdaDaMesmaLinha>
                                <PrecoProduto>{"R$ " + feed.product.price + " "}</PrecoProduto>
                                <Icon name="heart" size={18} color={"#ff0000"} />
                                <Likes> {feed.likes}</Likes>
                            </EsquerdaDaMesmaLinha>
                        </View>
                    </CardView>
                    <Espacador />
                    {this.mostrarComentarios()}
                    {telaNovoComentarioVisivel && this.mostrarNovoComentario()}
                </>
            );
        } else {
            return null;
        }
    }

}