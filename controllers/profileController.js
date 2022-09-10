const { editUserProfile, findUserProfile } = require("../models/profileModal");

exports.editProfile = (req, res) => {
    const userProfile = req.body;
    editUserProfile(userProfile)
        .then(() => {
            res.status(200).send({message: 'User profile inserted successfully'});
        }).catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Unable To Insert Profile', code: 500 });
        })
}


exports.getUserProfile = (req, res) => {
  const { email } = req.query;
  findUserProfile(email)
    .then((result) => {
      res.status(200).send({result});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Unable To Find Data", code: 500 });
    });
};
