import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// Schema.
import { Book } from './schemas/book.schema';

// DTO.
import { CreateABookDTO, FindABookByIdDTO } from './dto/book-dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private BookModel: mongoose.Model<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.BookModel.find();
  }

  async createABook(book: CreateABookDTO): Promise<Book> {
    return await this.BookModel.create(book);
  }

  async findABookById(id: FindABookByIdDTO): Promise<Book> {
    const book = await this.BookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    return book;
  }

  async updateABookById(
    id: FindABookByIdDTO,
    book: CreateABookDTO,
  ): Promise<Book> {
    return await this.BookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }
}
