const Discord = require('discord.js')
const fs = require('fs')

module.exports = class Spot {
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
    constructor({file, id, token}) {
        if (file) {
            const config = fs.readFileSync(file);
            const auth = JSON.parse(config);
            id = auth.id;
            token = auth.token;
        }
        else if (!(id && token)) {
            console.log('spot can not authenticate');
            return
        }

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