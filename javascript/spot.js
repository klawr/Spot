const Discord = require('discord.js')

class Spot {
    /**
     * @param {string} id - Discord id of target user for messages.
     * @param {string} token - Bot token.
     * 
     * Usage:
     * spot = new Spot(id, token);
     * spot.message('i love you');
     * spot.exit();
     * 
     */
    constructor(id, token) {
        this.client = new Discord.Client()

        this.user = this.client.login(token).then(() => {
                return this.client.fetchUser(id)
        });
        this.user.then(u => u.send('On Duty!'))
    }

    message(text) {
        this.user.then(u => u.send(text))
    }

    exit() {
        this.user.then(u => u.send('Work finished.'))
            .finally(() => this.client.destroy())
    }
}