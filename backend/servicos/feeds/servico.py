from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG="True"


MYSQL_SERVER = "bancodados"
MYSQL_USER = "root" 
MYSQL_PASS = "admin"
MYSQL_BANCO = "produtos"

def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao

def gerar_feed(registro):
    feed = {
        "_id": registro["feed_id"], 
        "datetime": registro["data"],
        "company": {
            "_id": registro["empresa_id"],
            "name": registro["nome_empresa"]
        },
        "product": {
            "name": registro["nome_produto"],
            "description": registro["descricao"],
            "price": registro["preco"],
            "promocao": registro["precopromocional"],
            "utilizacao": registro["modoutilizacao"],
            "cuidados": registro["cuidados"],
            "superficie": registro["superficie"],
            "blobs": [
                {
                    "type": "image",
                    "file": registro["imagem1"]
                }
            ]
        }

    }

    return feed

@servico.route("/isalive", methods=["GET"])
def is_alive():
    return jsonify(situacao = IS_ALIVE)


@servico.route("/feeds")
def get_feeds():
    feeds = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT feeds.id as feed_id, DATE_FORMAT(feeds.data, '%Y-%m-%d %H:%i') as data, " + 
        "empresas.id as empresa_id, empresas.nome as nome_empresa, empresas.avatar, " +
        "produtos.nome as nome_produto, produtos.descricao, FORMAT(produtos.preco, 2) as preco, FORMAT(produtos.precopromocional, 2) as precopromocional, produtos.modoutilizacao, produtos.cuidados, produtos.superficie, " +
        "produtos.imagem1 " +
        "from feeds, produtos, empresas " +
        "where produtos.id = feeds.produto " +
        "and empresas.id = produtos.empresa " +
        "order by data desc " )

    resultado = cursor.fetchall()
    for registro in resultado:
        feeds.append(gerar_feed(registro))    

    return jsonify(feeds)

@servico.route("/feed/<int:feed_id>")
def get_feed(feed_id):
    feed = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT feeds.id as feed_id, DATE_FORMAT(feeds.data, '%Y-%m-%d %H:%i') as data, " + 
        "empresas.id as empresa_id, empresas.nome as nome_empresa, empresas.avatar, " +
        "produtos.nome as nome_produto, produtos.descricao, FORMAT(produtos.preco, 2) as preco, FORMAT(produtos.precopromocional, 2) as precopromocional, produtos.modoutilizacao, produtos.cuidados, produtos.superficie, " +
        "produtos.imagem1 " +
        "from feeds, produtos, empresas " +
        "where produtos.id = feeds.produto " +
        "and empresas.id = produtos.empresa " +
        "and feeds.id = " + str(feed_id) + " "
        "order by data desc ")

    resultado = cursor.fetchall()
    for registro in resultado:
        feed = gerar_feed(registro) 

    return jsonify(feed)

@servico.route("/feeds_por_produto/<string:nome_produto>")
def get_feeds_por_produto(nome_produto):
    feeds = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT feeds.id as feed_id, DATE_FORMAT(feeds.data, '%Y-%m-%d %H:%i') as data, " + 
        "empresas.id as empresa_id, empresas.nome as nome_empresa, empresas.avatar, " +
        "produtos.nome as nome_produto, produtos.descricao, FORMAT(produtos.preco, 2) as preco, FORMAT(produtos.precopromocional, 2) as precopromocional, produtos.modoutilizacao, produtos.cuidados, produtos.superficie, " +
        "produtos.imagem1 " +
        "from feeds, produtos, empresas " +
        "where produtos.id = feeds.produto " +
        "and empresas.id = produtos.empresa "
        + "and produtos.nome LIKE '%" + nome_produto + "%' "
        + "order by data desc "
    )

    resultado = cursor.fetchall()

    for registro in resultado:
        feeds.append(gerar_feed(registro))

    return jsonify(feeds)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )

