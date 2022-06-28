const FEEDS_URL = "http://172.0.0.1:5001/"

export const getFeeds = async (pagina) => {
    let promise = null;

    try {
        resposta = await fetch(FEEDS_URL + "feeds/" + pagina, { method: "GET" })
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
