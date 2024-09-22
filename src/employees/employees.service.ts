import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
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

  findOne(id: number): Promise<Employee[]> {
    return this.employeeModel.find({ id }).exec();
  }

  update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee[]> {
    return this.employeeModel.findOneAndUpdate({ id }, updateEmployeeDto);
  }

  async remove(id: number) {
    await this.employeeModel.findOneAndDelete({ id }).exec();
    return 'done';
  }
}
