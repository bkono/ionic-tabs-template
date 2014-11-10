angular.module 'starter.services', []

  .factory 'Friends', ->
    friends = [
      { id: 0, name: 'Foobie' }
      { id: 1, name: 'GI Jane' }
      { id: 2, name: 'Ashton Kutchum' }
    ]
    return {
      all: ->
        friends
      get: (friendId) ->
        friends[friendId]
    }
