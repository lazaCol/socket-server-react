class Sockets {
    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        //On connection
        this.io.on('connection', (socket) => { 
            // console.log('client: '+socket.id);
        
            // socket.emit('mensaje-bienvenida', 'Bienvenido al server');
            //Escuchar evento cliente
            socket.on('mensaje-cliente', (payload) =>{
                console.log(payload);
            })
            //Escuchar evento cliente par el servidor
            socket.on('mensaje-to-server', (payload) => {
                console.log(payload);
                this.io.emit('mensaje-from-server', payload )
            })
        });
        
    }

}

module.exports = Sockets;