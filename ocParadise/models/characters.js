const mongoose = require('mongoose');

const charaSchema = new mongoose.Schema({
    image: { type: String },
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    zodiac: {type: String, enum: ['Aries', 'Taurus', 'Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']},
    birthplace: { type: String, required: true },
    bio: {type: String, required: true},
    idiosyncrasy: { type: String, required: true},
    personality:{type: String, required: true},
    relationships: {type: String},
    goalsMotivations:{type: String},
    fearsWeakness: {type: String},
    skills:{type: String},
    valueBeliefs:{type: String},
    fearsWeakness:{type: String},
    mostTreasured:{type: String},
    askForPermissionToUse: { type: Boolean, required: true },
    originalCreator: { type: String, required: true },
    socialMedia: {
        instagram: { type: String },
        twitter: { type: String },
        tiktok: { type: String }
      }
});

const chara = mongoose.model('chara', charaSchema);
module.exports = chara;
