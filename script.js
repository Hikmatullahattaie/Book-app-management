$(document).ready(function () {
    $(".btn-close").click(function(){
      $(".toast").hide()
    })
   
  
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
                const song = $("#add")[0];
                song.play();
        } else {
            // alert('لطفاً تمام فیلدها را پر کنید.');

                const song = $("#fadd")[0]
                song.play()
            
            
            $(".toast").show()
        }
       
    });

     // جستجوی کتاب
     $('#searchBook').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        loadBooks(searchTerm);
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

// اتصال رویدادهای ویرایش و حذف

function attachEditDeleteEvents() {
    $('.edit').click(function () {
        const index = $(this).data('index');
        const books = getBooks();

        const newName = prompt("ویرایش نام کتاب:", books[index].name);
        const newDescription = prompt("ویرایش توضیحات کتاب:", books[index].description);
        const newDate = prompt("ویرایش تاریخ کتاب:", books[index].date);

        if (newName && newDescription && newDate) {
            books[index] = { name: newName, description: newDescription, date: newDate };
            saveBooks(books);
            loadBooks();
            const song = $("#edit")[0];
            song.play();
        }
    });
    $('.delete').click(function () {
        const index = $(this).data('index');
        const books = getBooks();


        books.splice(index, 1);
        saveBooks(books);
        loadBooks();
        const song = $("#delete")[0];
        song.play();
        
    });
}

// خواندن کتابها از Local Storage
function getBooks() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}
// ذخیره کتابها در Local Storage
function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}
// پاک کردن ورودیها
function clearInputs() {
    $('#bookName').val('');
    $('#bookDescription').val('');

    $('#bookDate').val('');
}