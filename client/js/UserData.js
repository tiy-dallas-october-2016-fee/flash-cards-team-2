if (window.FC === undefined) { window.FC = {}; }

(function() {

  var userData;

  window.FC.UserData = {

    loadSets(cb) {
      $.ajax({
        url: '/api/sets'
      })
      .done((data) => {
        userData = data;
        cb(data)
      });
    },

    getSet: (setId, cb) => {

      var setExists = () => {
        var set = userData.sets.find((x) => { return x.id == setId});
        cb(set);
      };

      if (userData === undefined) {
        FC.UserData.loadSets(setExists);
      }
      else {
        setExists();
      }
    },

    addCardToSet: (setId, front, back, cb) => {

      $.ajax({
        url: '/api/sets/' + setId + '/card',
        method: 'POST',
        data: {
          setId: setId,
          front: front,
          back: back
        }
      })
      .done((data) => {
        FC.UserData.loadSets(cb)
      });
    },

    incrementIncorrectCountOnCard: (setId, cardId, cb) => {
      var set = userData.sets.find((x) => { return x.id == setId });
      // We have to find the position to update the server correctly.
      // We need the card to update the correct count in memory.
      var position;
      var card;
      set.cards.forEach((x, index) => {
        if (x.id == cardId) {
          card = x;
          position = index;
        }
      });

      card.incorrectCount += 1;

      $.ajax({
        url: '/api/sets/' + setId + '/card/' + position + '/incorrect',
        method: 'POST'
      })
      .done((data) => {
        cb();
      });


    },

    incrementCorrectCountOnCard: (setId, cardId, cb) => {

      var set = userData.sets.find((x) => { return x.id == setId });

      // We have to find the position to update the server correctly.
      // We need the card to update the correct count in memory.
      var position;
      var card;
      set.cards.forEach((x, index) => {
        if (x.id == cardId) {
          card = x;
          position = index;
        }
      });

      card.correctCount += 1;

      $.ajax({
        url: '/api/sets/' + setId + '/card/' + position + '/correct',
        method: 'POST'
      })
      .done((data) => {
        cb();
      });


    }

  };

})();
