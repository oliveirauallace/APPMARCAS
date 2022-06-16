import styled from "styled-components/native";

export const Cabecalho = {
    backgroundColor: '#99ccff',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0
}

export const NomeDetalhesProduto = styled.Text`
    font-weight: bold;
    font-size: 16;
    color: #59594a;
`;

export const NomedoProduto = styled.Text`
    font-size: 22;
    font-weight: bold;
    color: #59594a;
`;

export const DescricaodoProduto = styled.Text`
    font-size: 14;
    color: #59594a;
    text-align: justify;
`;

export const PrecodoProduto = styled.Text`
    font-size: 18;
    font-weight: bold;
    color: #59594a;
`;

export const TextPromocional = styled.Text`
    font-size: 11;
    font-style: italic;
`;

export const InputPesquisa = styled.TextInput`
    height: 50px;
    width: 130%;
    background-color: #fff;
    border-color: #99ccff;
    border-width: 1;
    border-radius: 10px;
`;

export const CentralizadoNaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: space-between;
    align-items: center;
`;

export const EsquerdaDaMesmaLinha = styled.View`
    flexDirection: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Espacamento = styled.View`
    flexDirection: row;
    padding: 3px;
`;

export const EspacamentoIcon = styled.View`
    margin-left: 20px;  
`;

export const TextComentarios = styled.Text`
    padding: 8px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 18;
    font-weight: bold;
    margin-top: 20px;
    color: #59594a;
    background-color: #99ccff;
    border-radius: 20px;
    text-align: center;
    width: 95%;
`;

export const ViewAvaliacao = styled.View`
    background-color: #fff;
    border-color: #c7c7c7;
    border-width: 1;
    margin-horizontal: 5px;
    text-align: justify;
    border-radius: 15px;
`;

export const AutorDataAvalicao = styled.Text`
    padding: 6px;
    font-size: 12;
    color: #283044;
    font-weight: bold;
`;

export const TextAvalicao = styled.Text`
    padding: 6px;
    font-size: 14;
    color: #283044;
    text-align: justify;
    font-style: italic;
`;

export const ImageProduto = styled.Image`
    width: 100px;
    height: 100px;
    margin-left: 10px;
    border-radius: 80px;
`;

export const ImageProdutoDetalhe = styled.Image`
    width: 90px;
    height: 90px;
    margin-top:10px;
    margin-left: 160px;
    border-radius: 80px;
`;

export const DescricaodoProdutoFeed = styled.Text`
    padding: 6px;
    margin-left: 8px;
    margin-right:8px;
    margin-bottom:8px;
    font-size: 14;
    color: #283044;
    text-align: justify;
   
`;