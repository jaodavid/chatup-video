const socket = io('/')
var pmyPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
}); 

socket.emit('join-room', ROOM_ID, 10)

socket.on('user-connected', (userId) => {
    console.log(`user ${userId} is now connected`)
})