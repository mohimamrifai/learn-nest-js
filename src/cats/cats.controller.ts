import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';

// 2. nest g controller cats

@Controller('cats') // -> /cats
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  /*
       GET      /cats
       GEt      /cats/:id
       POST     /cats
       PATCH    /cats/:id
       DELETE   /cats/:id
    */

  // -> decorator
  @Get() // GET /cats
  findAll(@Query('color') color?: string) {
    return {
      status: 'ok',
      data: this.catService.findAll(color),
    };
  }

  /* 
  fungsi findOne menerima 1 parameter yaitu id untuk mencari cats dengan id tertentu, type data parameter juga harus di sertakan.
  */
  @Get(':id') // GET /cats/:id
  findOne(@Param('id') id: string) {
    return {
      status: 'ok',
      data: this.catService.findOne(id),
    };
  }

  /* 
    Fungsi create untuk membuat atau menambah data, menerima data dari request body.
  */
  @Post() // POST /cats
  create(@Body() cat: { name: string; color: string }) {
    const data = this.catService.create(cat);
    return {
      status: 'ok',
      data: data,
    };
  }

  /* 
    Fungsi update untuk mengubah membutuhkan parameter id dan body
  */
  @Patch(':id') // PATCH /cats/:id
  update(
    @Param('id') id: string,
    @Body() catUpdate: { name?: string; color?: string },
  ) {
    const newCat = this.catService.update(id, catUpdate);
    return {
      status: 'ok',
      data: newCat,
    };
  }

  @Delete(':id') // DELETE /cats/:id
  delete(@Param('id') id: string) {
    return `cats with id = ${id}, successfully deleted!`;
  }
}
