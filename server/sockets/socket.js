const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario conectado');

    // Emito un mensaje para que el cliente lo escuche
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    // Cuando cierra el navegador el cliente o cierra la pestaña
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback)=>{
        console.log(mensaje);
        if ( mensaje.usuario ) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        }else {
            callback({
                resp: 'TODO SALIO MAL'
            });
        }
    });

});