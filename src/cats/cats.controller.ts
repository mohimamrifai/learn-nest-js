import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// 2. nest g controller cats

@Controller('cats') // -> /cats
export class CatsController {
  /*
       GET      /cats
       GEt      /cats/:id
       POST     /cats
       PATCH    /cats/:id
       DELETE   /cats/:id
    */

  // -> decorator
  @Get() // GET /cats
  findAll(@Param('color') color?: string) {
    return [];
  }

  /* 
  fungsi findOne menerima 1 parameter yaitu id untuk mencari cats dengan id tertentu, type data parameter juga harus di sertakan.
  */
  @Get(':id') // GET /cats/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  /* 
    Fungsi create untuk membuat atau menambah data, menerima data dari request body.
  */
  @Post() // POST /cats
  create(@Body() cats: {}) {
    return cats;
  }

  /* 
    Fungsi update untuk mengubah membutuhkan parameter id dan body
  */
  @Patch(':id') // PATCH /cats/:id
  update(@Param('id') id: string, @Body() catsUpdate: {}) {
    return { id, ...catsUpdate };
  }

  @Delete(':id') // DELETE /cats/:id
  delete(@Param('id') id: string) {
    return `cats with id = ${id}, successfully deleted!`;
  }
}
