import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Book } from "./book.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "buffweb";
  bookTypes: string[] = ["MATH", "GEOGRAPHY"];
  bookTypeError: string;
  books: Book[] = [];
  bookSelected: number = -1;
  typeSelected = 0;
  currentBook: Book = {
    bookType: "",
    title: "",
    description: "",
    selected: false
  };
  constructor() {}

  addBookType(form: NgForm) {
    if (this.bookTypes.find(value => value == form.value.bookType)) {
      this.bookTypeError = `Element ${form.value.bookType} already in list of booktypes`;
    } else {
      this.bookTypes.push(form.value.bookType);
      form.reset();
      this.bookTypeError = null;
    }
  }

  addBook(form: NgForm) {
    let bookType = form.value.bookTypeSelect.toUpperCase();
    let title = form.value.title.toUpperCase();
    let description = form.value.bookDescription.toUpperCase();
    this.books.push({
      bookType: bookType,
      title: title,
      description: description
    });
    form.reset();
  }

  selectBook(position: number) {
    this.currentBook = {
      bookType: this.books[position].bookType.toUpperCase(),
      title: this.books[position].title.toUpperCase(),
      description: this.books[position].description.toUpperCase()
    };
    this.bookSelected = position;
    this.typeSelected = this.bookTypes.indexOf(this.currentBook.bookType);
  }

  updateBook(form: NgForm) {
    this.books[this.bookSelected].bookType = form.value.bookTypeSelect;
    this.books[this.bookSelected].title = form.value.title;
    this.books[this.bookSelected].description = form.value.bookDescription;
    form.reset();
    this.bookSelected = -1;
  }

  deleteBook(position: number) {
    this.books.splice(position, 1);
  }
}
