const Discord = require('discord.js')

class Spot {
    /**
     * @param {string} id - Discord id of target user for messages.
     * @param {string} token - Bot token.
     */
    constructor(id, token) {
        this.client = new Discord.Client()

        this.channel = this.client.login(token).then(() => {
            return this.channel = this.client.fetchUser(id).then(u => {
                return u.createDM();
            });
        });
        this.channel.then(c => c.send('On Duty!'));
    }

    message(text) {
        this.channel.then(c => c.send(text))
    }

    exit() {
        this.channel
            .then(c => c.send('Work finished.'))
            .finally(() => this.client.destroy())
    }
}
