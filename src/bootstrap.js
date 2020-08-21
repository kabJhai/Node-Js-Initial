module.exports = async()=>{
    const Tweet =  require("./models/Tweet");
    const User =  require("./models/User");

    //Association
    User.hasMany(Tweet,{as : "Tweets",foreignKey:'userId'});
    Tweet.belongsTo(User,{as: "User",foreignKey:"userId"});
    const errHandler = (err)=>{
        console.log("Error: "+err);
    }

    //Create
    // console.log("Creating");
    const user = await User.create({
        username:"kabila",
        passwd:'123456',
    }).catch(errHandler);
    // console.log("Created");

    const tweet = await Tweet.create({
        content:"This is the tweet content",
        userId:23123
    }).catch(errHandler);

    const users = await User.findAll({where : {username : "kabila"},include:[{
        model:Tweets,
        as:'Tweets'
    }]}).catch(errHandler);

    console.log("The tweets are",users);
}