$(document).ready(function () {
    $(".btn-close").click(function(){
      $(".toast").hide()
    })
    $("#addBook").click(function(){
      const song = $("#add")[0];
      song.play();
  
    });
  
      loadBooks();
  
      // افزودن کتاب
    $('#addBook').click(function () {
        const name = $('#bookName').val();
        const description = $('#bookDescription').val();
        const date = $('#bookDate').val();

        if (name && description && date) {

            const books = getBooks();
            books.push({ name, description, date });
            saveBooks(books);
            loadBooks();
            clearInputs();
        } else {
            // alert('لطفاً تمام فیلدها را پر کنید.');
            var song = $("#fadd")[0]
            song.play()
            $(".toast").show()
        }
    });
  
     
  });