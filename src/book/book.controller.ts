import { Controller, Get } from '@nestjs/common';

// Services.
import { BookService } from './book.service';

// Schema.
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return this.bookService.findAllBooks();
  }
}
