module.exports = {
   name: "ready",
   execute(client) {
     console.log(`${client.user.username} Sudah Ngocok`)
     client.user.setActivity('Testing Bot', {type: 'WATCHING'});
   }
}
