
var express     = require('express'); //chamando o pacote express
var app         = express(); //definção da nossa aplicação através do express
var bodyParser  = require('body-parser');  //chamando o pacote body-parser
 
/** Configuração da variável 'app' para usar o 'bodyParser()'.
 * Ao fazermos isso nos permitirá retornar os dados a partir de um POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
/** Definição da porta onde será executada a nossa aplicação */
var port = process.env.PORT || 8000; 
 
//Rotas da nossa API:
//==============================================================
 
/* Aqui o 'router' irá pegar as instâncias das Rotas do Express */
var router  = express.Router(); 
 
/* GET: http://localhost:8000/api) */
router.get('/', function(req, res) {
    res.json({ message: 'Chega em algum lugar!!!' });
});
 
/* TODO - Definir futuras rotas aqui!!! */
 
/* Todas as nossas rotas serão prefixadas com '/api' */
app.use('/api', router);
 
//Iniciando o Servidor (Aplicação):
//==============================================================
app.listen(port);
console.log('Iniciando aplicação: porta ' + port);