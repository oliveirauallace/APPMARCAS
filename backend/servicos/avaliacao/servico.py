from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG="True"
TAMANHO_PAGINA = 8

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root" 
MYSQL_PASS = "admin"
MYSQL_BANCO = "produtos"

def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao

def gerar_avaliacao(registro):
    avalicao = {
        "_id": registro["id"],
        "feed": registro["feed"],
        "user": {
            "name": registro["nome"]
        },
        "datetime": registro["data"],
        "content": registro["comentario"]
    }

    return avalicao

@servico.route("/isalive")
def is_alive():
    return jsonify(situacao = IS_ALIVE)

@servico.route("/avaliacao/<int:feed_id>")
def get_avaliacao(feed_id):
    avaliacao = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT id, feed, comentario, nome, DATE_FORMAT(data, '%Y-%m-%d %H:%i') as data from avaliacao where feed = " 
        + str(feed_id))
    resultado = cursor.fetchall()
    for registro in resultado:
        avaliacao.append(gerar_avaliacao(registro))

    return jsonify(avaliacao)

if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )
