# Node-Js-Initial
## Why node js?
## Basic Features of NodeJs
1. Effcient Fast and Easy to get started with
2. Large Support Community
3. Large Set of Modules
4. Single Threaded, Non-Blocking I/O
5. Asynchronous Calls/ Responses with I/O
6. Event Driven System
7. Shipped with REPL Interpreter
- Read, Evaluate Print Loop
8. Built On Top of Chrome's V8 JS Optimized Engine

# Initialize node
```cmd
npm init
``` 
Then enter the informations asked by the dialogue

# Import modules
```JavaScript
require('m')
```

# Export data

```JavaScript
exports.x var x = "value';
```

# Install Modules

Save it for use both in development and deployment server
```JavaScript
npm install module-name --save
```

Save it for development server only
```JavaScript
npm install module-name --save-dev
```

## Sequelize 

### Initialize sequelize
To initialize sequelize
```sequelize init```
### Create models for your database
```JavaScript
module.exports = sequelize.define("Tweets",{
    id: {
        type: Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    content: Sequelize.STRING(300),
});
```

### Then create migrations

```sequelize migration:create --name your_migration_name```

