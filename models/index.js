const User = require("./User")
const Pet = require("./Pet")
const Toy = require("./Toy")

User.hasMany(Pet);
Pet.belongsTo(User);

Pet.hasMany(Toy);
Toy.belongsTo(Pet);

module.exports = {
    User:User,
    Pet:Pet,
    Toy:Toy
}