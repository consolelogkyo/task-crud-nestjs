import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDTO } from './create-task.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {
  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}
