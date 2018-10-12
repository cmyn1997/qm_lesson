// isbn title author 
// public 有问题`
// 私有化
// 立即执行函数
var Book = (function() {
    // 闭包 
    var numOfBooks = 0;
    return function(newIsbn, newTitle, newAuthor) {
      // 局部作用域内的变量
      console.log(newIsbn, newTitle, newAuthor, numOfBooks);
      var isbn, title, author;
      //public  
      this.setTitle = function(newTitle) {
        title = newTitle || 'No Title specified';
      }
  
      this.getTitle = function() {
        return title;
      }
  
      this.setTitle(newTitle);
      numOfBooks++;
      this.getNumOfBooks = function() {
        return numOfBooks;
      }
      console.log(`创建了${numOfBooks}本书`);
      //constructor
    }
  })();
  
  var book = new Book('123', '飞鸟集', '泰戈尔');
  var book2 = new Book('123', 'HTML6高级程序设计', '聂尧');
  console.log(book.getTitle());
  // book.title
  