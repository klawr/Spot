# Spot
### Simple Discord Message Bot

**Spot** is intended to be a simple message bot which can be used by other programs to message a discord user.
The message can contain every information tangible in the respective script.

So far **spot** provides an implementation in *JavaScript* and *Python*.

#### Examples

*Python*:
```
import spot
with spot('./config.json') as spot:
    spot.message('i love you')
```

*JavaScript*:
```
spot = new Spot(id, token);
spot.message('i love you');
spot.exit();
```

For the scripts to work you have to provide an **id** and a **token**.

The respective functions also allows you to provide a file, containing the information in **JSON**:

```json
{
    "id": "your_id_here",
    "token": "spot_token_here"
}
```

The `id` is an id to identify the account to send the message to.
You can get a user `id` by right-clicking the respective user in the right sidebar of a server.

The `token` allows **spot** to log in, enabling it to write messages.
You can get a token when you register a bot on discord.
**Spot** has to be operating on a server accordingly.
