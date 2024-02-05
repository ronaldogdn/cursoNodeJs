const EventEmitter = require('events');

class Evento extends EventEmitter{
}

const meuEvento = new Evento();
//on cria o evento
meuEvento.on('seguranca',(x,y)=>{
    console.log(`executando o evento "segurança": ${x} ${y}` )
});
//chama o evento
meuEvento.emit('seguranca','userAdmin','alterou salário')