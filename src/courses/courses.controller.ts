import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response) {
    return response.status(201).send('Listagem de cursos!');
  }

  @Get('course/:id/:name')
  findCourse(@Param('id') id: number, @Param('name') name: string) {
    return `Curso #${id} nome: ${name}`
  }

  @Post('create')
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') name, @Body('price') price) {
    return `Nome: ${name}, Preço: ${price}`
  }
}
