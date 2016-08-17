app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.addMessage = function(newMessage){
    MessagesService.add(newMessage)
    $location.url('/');
  }
})
