import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

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
    const course = this.coursesService.findOne(id);

    if(!course)
        throw new HttpException(
            `Course ID ${id} Not Found`,
            HttpStatus.NOT_FOUND
        );

    return course;
  }

  @Post('create')
  //@HttpCode(HttpStatus.NO_CONTENT)
  // Use @Body('name') name, @Body('price') price, for get params custom
  // Or @Body() body for get params All
  //create(@Body('name') name, @Body('price') price) 
  create(@Body() createCourseDto: CreateCourseDto) 
  {
    return this.coursesService.create(createCourseDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) 
  {
    return this.coursesService.update(id, updateCourseDto)
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) 
  {
    return this.coursesService.remove(id)
  }

}
