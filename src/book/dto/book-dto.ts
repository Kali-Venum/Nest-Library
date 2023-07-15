import { Category } from "../schemas/book.schema";

export class CreateABookDTO {
  readonly name: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: Category;
}

export class FindABookByIdDTO {
  readonly id: string;
}
