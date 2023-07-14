import { Body, Controller, Get, Post } from '@nestjs/common';

// Services.
import { BookService } from './book.service';

// Schema.
import { Book } from './schemas/book.schema';

// DTO.
import { CreateABookDTO } from './dto/book-dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }

  @Post()
  async createABook(@Body() book: CreateABookDTO): Promise<Book> {
    return this.bookService.createABook(book);
  }
}
