import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// Schema.
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private BookModel: mongoose.Model<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.BookModel.find();
  }
}
