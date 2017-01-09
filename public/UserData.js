'use strict';

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var userData;

  window.FC.UserData = {
    loadSets: function loadSets(cb) {
      $.ajax({
        url: '/api/sets'
      }).done(function (data) {
        userData = data;
        cb(data);
      });
    },


    getSet: function getSet(setId, cb) {

      var setExists = function setExists() {
        var set = userData.sets.find(function (x) {
          return x.id == setId;
        });
        cb(set);
      };

      if (userData === undefined) {
        FC.UserData.loadSets(setExists);
      } else {
        setExists();
      }
    },

    addCardToSet: function addCardToSet(setId, front, back, cb) {

      $.ajax({
        url: '/api/sets/' + setId + '/card',
        method: 'POST',
        data: {
          setId: setId,
          front: front,
          back: back
        }
      }).done(function (data) {
        FC.UserData.loadSets(cb);
      });
    },

    incrementIncorrectCountOnCard: function incrementIncorrectCountOnCard(setId, cardId, cb) {
      var set = userData.sets.find(function (x) {
        return x.id == setId;
      });
      // We have to find the position to update the server correctly.
      // We need the card to update the correct count in memory.
      var position;
      var card;
      set.cards.forEach(function (x, index) {
        if (x.id == cardId) {
          card = x;
          position = index;
        }
      });

      card.incorrectCount += 1;

      $.ajax({
        url: '/api/sets/' + setId + '/card/' + position + '/incorrect',
        method: 'POST'
      }).done(function (data) {
        cb();
      });
    },

    incrementCorrectCountOnCard: function incrementCorrectCountOnCard(setId, cardId, cb) {

      var set = userData.sets.find(function (x) {
        return x.id == setId;
      });

      // We have to find the position to update the server correctly.
      // We need the card to update the correct count in memory.
      var position;
      var card;
      set.cards.forEach(function (x, index) {
        if (x.id == cardId) {
          card = x;
          position = index;
        }
      });

      card.correctCount += 1;

      $.ajax({
        url: '/api/sets/' + setId + '/card/' + position + '/correct',
        method: 'POST'
      }).done(function (data) {
        cb();
      });
    }

  };
})();
//# sourceMappingURL=UserData.js.map
