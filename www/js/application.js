angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).run(["$ionicPlatform", function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    var _ref, _ref1, _ref2;
    if ((_ref = window.cordova) != null) {
      if ((_ref1 = _ref.plugins.Keyboard) != null) {
        _ref1.hideKeyboardAccessoryBar(true);
      }
    }
    return (_ref2 = window.StatusBar) != null ? _ref2.styleDefault() : void 0;
  });
}]).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }).state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.friends', {
    url: '/friends',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friends.html',
        controller: 'FriendsCtrl'
      }
    }
  }).state('tab.friend-detail', {
    url: '/friend/:friendId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/friend-detail.html',
        controller: 'FriendDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  return $urlRouterProvider.otherwise('/tab/dash');
}]);

angular.module('starter.controllers', []).controller('DashCtrl', ["$scope", function($scope) {}]).controller('ChatsCtrl', ["$scope", "Chats", function($scope, Chats) {
  $scope.chats = Chats.all();
  return $scope.remove = function(chat) {
    return Chats.remote(chat);
  };
}]).controller('ChatDetailCtrl', ["$scope", "$stateParams", "Chats", function($scope, $stateParams, Chats) {
  return $scope.chat = Chats.get($stateParams.chatId);
}]).controller('FriendsCtrl', ["$scope", "Friends", function($scope, Friends) {
  return $scope.friends = Friends.all();
}]).controller('FriendDetailCtrl', ["$scope", "$stateParams", "Friends", function($scope, $stateParams, Friends) {
  return $scope.friend = Friends.get($stateParams.friendId);
}]).controller('AccountCtrl', ["$scope", function($scope) {
  return $scope.settings = {
    enableFriends: true
  };
}]);

angular.module('starter.services', []).factory('Friends', function() {
  var friends;
  friends = [
    {
      id: 0,
      name: 'Ben Sparrow',
      notes: 'Enjoys drawing things',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      notes: 'Odd obsession with everything',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Andrew Jostlen',
      notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 3,
      name: 'Adam Bradleyson',
      notes: 'I think he needs to buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      notes: 'Just the nicest guy',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }
  ];
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      return friends[friendId];
    }
  };
}).factory('Chats', function() {
  var chats;
  chats = [
    {
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Andrew Jostlin',
      lastText: 'Did you get the ice cream?',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 3,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 4,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }
  ];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      return chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      var chat, chatIdInt, _i, _len;
      chatIdInt = parseInt(chatId);
      for (_i = 0, _len = chats.length; _i < _len; _i++) {
        chat = chats[_i];
        if (chat.id === chatIdInt) {
          return chat;
        }
      }
    }
  };
});
