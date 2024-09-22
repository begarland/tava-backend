import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { data } from 'src/mock/data';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  // findAll() {
  //   // return data.filter((datum) => !datum.archived);
  //   // return `This action returns all employees`;
  // }

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
