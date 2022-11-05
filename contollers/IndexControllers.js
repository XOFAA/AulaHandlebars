
const path=require('path')

let nomes=[];


module.exports = class IndexControllers{
    static Agenda(req,res){
        res.sendFile(path.resolve('index.html'));
    }
    static Save(req,res){
        let Idade = (2022-req.body.ano);
        nomes.push(req.body.nome,Idade)
        console.log(nomes)
        /* Todos os valores ficam no objeto req.body */
        res.send('Valores recebidos via requisição com sucesso!')
    }
}