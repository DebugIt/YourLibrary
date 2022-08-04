console.log("Welcome to YourLibrary - console");

// constructor
function Book(BookName, Author, type) {
    this.name = BookName;
    this.author = Author;
    this.Type = type;
}

// Display constructor
function Display() {

}

// add methods to display protoype
Display.prototype.add = function (book) {
    console.log("adding to list");
    // adding the book details to the list in ui
    List = document.getElementById('List');
    let UiString = `
                        <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.Type}</td>
                        </tr>
    `;
    List.innerHTML += UiString;
}

// clear function
Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm')
    LibraryForm.reset();
}


// validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message : </strong>${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000)


}




// add submit event listener to LibraryForm
let LibraryForm = document.getElementById('LibraryForm');
LibraryForm.addEventListener('submit', LibraryFormSubmit);

function LibraryFormSubmit(e) {
    console.log("You have submited the form");
    // function to run when the submit button is clicked
    let BookName = document.getElementById('BookName').value;
    let Author = document.getElementById('Author').value;
    let type;

    // Fiction Programming design
    // To get the type of which the user has selected
    let Fiction = document.getElementById('Fiction');
    let Programming = document.getElementById('Programming');
    let design = document.getElementById('design');

    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (design.checked) {
        type = design.value;
    }



    let book = new Book(BookName, Author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show("success", "book added!")
    }
    else {
        display.show("danger", "Book can't be added");
    }

    e.preventDefault();         // Preventing the default reload behaviour of the form
}