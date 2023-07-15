import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

// Services.
import { BookService } from './book.service';

// Schema.
import { Book } from './schemas/book.schema';

// DTO.
import { CreateABookDTO, FindABookByIdDTO } from './dto/book-dto';

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

  @Get(':id')
  async findABookById(@Param('id') id: FindABookByIdDTO): Promise<Book> {
    return this.bookService.findABookById(id);
  }

  @Put(':id')
  async updateABookById(@Param('id') id: FindABookByIdDTO, @Body() book: CreateABookDTO): Promise<Book> {
    return this.bookService.updateABookById(id, book);
  }
}
