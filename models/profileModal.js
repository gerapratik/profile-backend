const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/mongo");

exports.insertUserProfile = (userProfile) => {
    return new Promise((resolve, reject) => {
        const db = getDb();
        db.collection('userProfiles').insertOne(userProfile, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

exports.findUserProfile = (email) => {
    return new Promise((resolve, reject) => {
        const db = getDb();
        db.collection('userProfiles').findOne({email},function(err, result) {
            if (err) {
                reject(err);
            } else {
                if (result) {
                    resolve(result);
                } else {
                    reject({message: 'result not found'})
                }
            }
        });
    })
}

exports.editUserProfile = (editedProfile) => {
    return new Promise((resolve, reject) => {
        const db = getDb();
        const id = editedProfile._id;
        delete editedProfile._id;
        db.collection('userProfiles').updateOne({_id: ObjectId(id)}, {$set: {...editedProfile}}, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}