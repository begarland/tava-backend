import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { data } from 'src/mock/data';

@Injectable()
export class EmployeesService {
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll() {
    return data.filter((datum) => !datum.archived);
    // return `This action returns all employees`;
  }

  findOne(id: number) {
    return data.find((datum) => datum.id === +id);
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return data.find((datum) => datum.id === +id);
    return `This action updates a #${id} employee, ${JSON.stringify(updateEmployeeDto)}`;
  }

  remove(id: number) {
    data.find((datum) => datum.id === +id).archived = true;
    console.log(data);
    return `This action removes a #${id} employee`;
  }
}
