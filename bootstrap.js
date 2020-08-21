module.exports = async()=>{
    const Tweet =  require("./src/models/Tweet");
    const User =  require("./src/models/User");

    //Association
    User.hasMany(Tweet,{as : "Tweets",foreignKey:'userId'});
    Tweet.belongsTo(User,{as: "User",foreignKey:"userId"});
    const errHandler = (err)=>{
        console.log("Error: "+err);
    }

    //Create
    const user = await User.create({
        username:"kabila",
        passwd:'123456'
    }).catch(errHandler);

    const tweet = await Tweet.create({
        content:"This is the tweet content",
        userId:user.id
    }).catch(errHandler);

    const users = await User.findAll({where : {username : "kabila"},include:[{
        model:Tweets,
        as:'Tweets'
    }]}).catch(errHandler);

    console.log("The tweets are",users);
}