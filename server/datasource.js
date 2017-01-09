function generateRandomId() {
  return Math.ceil(Math.random() * 1000000);
}

var users = {};

var setsByUserId = {};

module.exports = {

  createUser: function(email, password, done) {
    var userId = generateRandomId();

    var user = {
      id: userId,
      email: email,
      password: password
    };

    users[userId] = user;
    done(user);
  },

  validateLogin: function(email, password, success, failure) {
    for (var key in users) {
      var user = users[key];
      if (user.email === email && user.password === password) {
        success(user);
      }
      else {
        failure();
      }
    }
  },

  getUserById: function(id, done) {
    done(users[id]);
  },

  getSetsForUser: function(userId, done) {
    done(setsByUserId[userId]);
  },

  createSetForUser: function(userId, name, description, done) {

    var userSets = setsByUserId[userId] || {};

    var setId = generateRandomId();
    var set = {
      id: setId,
      name: name,
      description: description,
      cards: []
    }
    userSets[setId] = set;
    setsByUserId[userId] = userSets;

    done(set);
  },

  deleteSetForUser: function(userId, setId, done) {
    var userSets = setsByUserId[userId] || {};

    delete userSets[setId];
    done();
  },



  newCard: function(userId, setId, front, back, cb) {
    var userSets = setsByUserId[userId] || {};
    var set = userSets[setId];

    var card = {
      id: generateRandomId(),
      front: front,
      back: back
    };

    set.cards.push(card);
    cb(card);
  }

}
