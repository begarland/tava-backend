import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  currentCount = 14;

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    console.log(`POST - /employees -`, new Date());

    this.currentCount++;

    const employee =
      typeof createEmployeeDto === 'string'
        ? { ...JSON.parse(createEmployeeDto) }
        : { ...createEmployeeDto };

    employee.id = this.currentCount;

    return this.employeesService.create(employee);
  }

  @Get()
  findAll() {
    console.log('GET - /employees -', new Date());
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(`GET - /employees/${id} -`, new Date());
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    console.log(`PATCH - /employees/${id} -`, new Date());
    return this.employeesService.update(
      +id,
      typeof updateEmployeeDto === 'string'
        ? JSON.parse(updateEmployeeDto)
        : updateEmployeeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
