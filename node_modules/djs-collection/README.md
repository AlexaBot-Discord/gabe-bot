# djs-collection
The "Collection" structure extracted from Discord.js. Collections extend Map() by adding helper methods generally found on Arrays.

## Credits

The original work on Collections is done by Amish Shah (hydrabolt) and the Discord.js contributor team. 

This module is distributed with permissions form the original author. I make no claim to this work, and only distribute it as a helper method for the rest of the world to enjoy.

## Documentation

Currently the documentation for this method can be found on [The Discord.js Official Documentation](https://discord.js.org/#/docs/main/stable/class/Collection)

## Example Usage

```js
const Collection = require("djs-collection");
const myColl = new Collection();

for(let i; i<100;i++) {
  myColl.set(`test${i}`, {testValue: "This is a test Value"});
}

console.log(myColl.size);
console.log(myColl.get("test55").testValue);
```

## Support

For support on this, or any of my repositories, join my Discord guild:
[https://discord.gg/PhT8scR](https://discord.gg/PhT8scR)
