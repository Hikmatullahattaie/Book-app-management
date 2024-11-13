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

     // جستجوی کتاب
     $('#searchBook').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        loadBooks(searchTerm);
    });
    $("#dd").click(function(){
        const song = $("#edit")[0];
        song.play();
      
      });
      $("#cc").click(function(){
        const song = $("#delete")[0];
        song.play();
      
      });
  
     
  });

  // بارگذاری کتابها
function loadBooks(searchTerm = '') {
    const books = getBooks();
    $('#bookList').empty();

    books.forEach((book, index) => {

        if (book.name.toLowerCase().includes(searchTerm)) {
            $('#bookList').append(
                ` 
             <tr class="">
                    <td>  ${book.name}</td>
                    <td> ${book.description}</td>
                    <td>(${book.date})</td>
                    <td><button class="edit input  mt-3 btn btn-outline-success" id = "dd" data-index="${index}"><i class="bi bi-credit-card" ></i></button>
                        <button class="delete input  mt-3 btn btn-outline-success" data-index="${index}"> <i class="bi bi-trash" id = "cc"></i></button>
                        </td>
                    </tr> 
                `
            );
        }
    });

    attachEditDeleteEvents();
}