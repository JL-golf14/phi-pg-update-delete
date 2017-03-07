var myApp = angular.module('BookApp', []);

myApp.controller('BookController',['$http', function($http){
console.log("BookApp");
var self = this;
self.something = 7;
self.bookList=[];
self.newBook = {};


getBooks();

function getBooks(){
  $http({
    method: 'GET',
    url: '/books',
  }).then(function(response) {
    console.log(response.data);
    self.bookList = response.data;
  });
}


}]);
