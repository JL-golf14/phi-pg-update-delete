var myApp = angular.module('BookApp', []);

myApp.controller('BookController',['$http', function($http){
console.log("BookApp");
var self = this;
self.something = 7;
self.bookList=[];
self.newBook = {};
self.saveBook = {};

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



self.addBook =function(){
    $http({
    method: 'POST',
    url:'/books/new/',
    data:self.newBook
  }).then(function(response){
    console.log(response);
    getBooks();
    self.newBook = {};
  });
}

self.deleteBook = function(bookId){
  $http({
  method: 'DELETE',
  url:'/books/delete/'+ bookId,

}).then(function(response){
  console.log(response);
  getBooks();
  self.newBook = {};
});
}

self.saveBook = function(book){
  $http({
  method: 'PUT',
  url:'/books/save/'+ book.id,
  data: book

}).then(function(response){
  console.log(response);
  getBooks();
});
}





}]);
