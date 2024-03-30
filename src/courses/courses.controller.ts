import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  
  constructor(private readonly coursesService: CoursesService) 
  {}

  @Get('list')
  findAll(@Res() response) 
  {
    return response.status(206).send(this.coursesService.findAll());
  }

  @Get('course/:id/:name')
  findOne(@Param('id') id: string, @Param('name') name: string) 
  {
    return this.coursesService.findOne(id);
  }

  @Post('create')
  //@HttpCode(HttpStatus.NO_CONTENT)
  // Use @Body('name') name, @Body('price') price, for get params custom
  // Or @Body() body for get params All
  //create(@Body('name') name, @Body('price') price) 
  create(@Body() body) 
  {
    return this.coursesService.create(body);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body) 
  {
    return this.coursesService.update(id, body)
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) 
  {
    return this.coursesService.remove(id)
  }

}
