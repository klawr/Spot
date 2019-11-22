import asyncio
import discord

class Spot(discord.Client):
    '''
    import spot
    with spot(id, token) as spot:
        spot.message('i love you')
    '''
    def __init__(self, user_id, token, loop=asyncio.new_event_loop(), *args, **kwargs):
        self.loop = loop
        super().__init__(*args, **kwargs)
        async def login(token):
            await self.login(token)
            user = await self.fetch_user(user_id)
            self.channel = await user.create_dm()
            await self.channel.send('On duty!')
        self.loop.run_until_complete(login(token))

    def __enter__(self):
        return self

    def exit(self):
        async def goodbye():
            await self.channel.send('Work finished.')
            await self.logout()
        self.loop.run_until_complete(goodbye())

    def __exit__(self, *args):
        self.exit()
    
    def message(self, text):
        self.loop.run_until_complete(self.channel.send(text))
