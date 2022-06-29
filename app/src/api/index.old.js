const FEEDS_URL = "http://192.168.1.39:5001/"
const AVALIACOES_URL = "http://192.168.1.39:5002/"


const acessarUrl = async (url) => {
    let promise = null;

    console.log("acessando: " + url);

    try {
        resposta = await fetch(url, { method: "GET" })
        if (resposta.ok) {
            promise = Promise.resolve(resposta.json());
        } else {
            promise = Promise.reject(resposta);
        }
    } catch (erro) {
        promise = Promise.reject(erro);
    }

    return promise;
}

export const feedsIsAlive = async () => {
    return acessarUrl(FEEDS_URL + "isalive");
}

export const getFeeds = async () => {
    return acessarUrl(FEEDS_URL + "feeds");
}

export const getFeed = async (feedId) => {
    return acessarUrl(FEEDS_URL + "feed/" + feedId)
}

export const avaliacoesIsAlive = async () => {
    return acessarUrl(AVALIACOES_URL + "isalive");
}

export const getAvaliacao = async (feedId) => {
    return acessarUrl(AVALIACOES_URL + "avaliacao/" + feedId);
}