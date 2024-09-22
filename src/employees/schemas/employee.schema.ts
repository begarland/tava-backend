import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  id: number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dateStarted: string;

  @Prop()
  department: string;

  @Prop()
  quote: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  status: string;

  @Prop()
  archived: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

// id: number;
// firstName: string;
// lastName: string;
// dateStarted: string;
// department: string;
// quote: string;
// avatarUrl: string;
// status: 'active' | 'inactive';
// archived?: boolean;
