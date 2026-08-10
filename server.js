const http = require('node:http');

const PORTA = 3000

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain; charset=utf-8')

    res.end("Servidor nativo funcionando!");
});

http.Server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`);
});