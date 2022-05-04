const sequelize = require("../config/connection")
const {User,Pet,Toy} = require("../models")

const users = [
    {
        email:"joe@joe.joe",
        password:"password"
    },
    {
        email:"Nile@joe.joe",
        password:"password1"
    }
]

const pets = [
    {
        name:"Shiva",
        species:"almost a cat",
        UserId:1
    },
    {
        name:"Bahamut",
        species:"cat",
        UserId:1
    }, 
    {
        name:"Oz",
        species:"cat",
        UserId:2
    }
]

const toys = [
    {
       name:"my tail",
       description:"I love to chase it in high places.  I know thats weird because i am an adult cat." ,
       PetId:1
    }
]

const feedMe = async ()=>{
    await sequelize.sync({force:true})
    await User.bulkCreate(users);
    await Pet.bulkCreate(pets);
    await Toy.bulkCreate(toys);
    process.exit(0);
}

feedMe()