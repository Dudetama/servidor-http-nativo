const http = require('node:http');

const PORTA = 3000
const produtos = [
    {id: 1, nome: "Sabonete"},
    {id: 2, nome: "Volante Logitech"},
    {id: 3, nome: "Sabão em Pó"},
    {id: 4, nome: "Pelucia do Sonic"}
]

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log(new Date().toISOString())

    res.statusCode = 201;
    res.setHeader('Content-type', 'application/json', 'text/plain; charset= utf-8')

    if (req.method == "GET" && req.url == "/contato") {
        return res.end(JSON.stringify({data:{numero_telefone: "67 99999 9999",
                endereco: "Rua da Alegria, 99, Centro"}}));
    }
    

    if (req.method == "GET" && req.url == "/produtos") {
        return res.end(JSON.stringify(produtos));
    }

    res.end(JSON.stringify({data: "Página Inicial"}))
});

    res.end(JSON.stringify({ status: "ok" }));

http.Server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`);
});