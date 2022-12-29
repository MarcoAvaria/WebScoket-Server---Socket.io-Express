// HTML References
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnenviar = document.querySelector('#btnEnviar');

//import { io } from "socket.io-client";
const socket = io();

socket.on('connect', () => {

    // console.log('Conectado');

    //lblOffline.getElementsByClassName.display = 'none';
    //lblOnline.getElementsByClassName.display = 'none';
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';


});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log( payload );
})

btnenviar.addEventListener( 'click', () => {
    
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });
})