/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParameterResultWhereInput } from "./ParameterResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ParameterResultOrderByInput } from "./ParameterResultOrderByInput";

@ArgsType()
class ParameterResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ParameterResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ParameterResultWhereInput, { nullable: true })
  @Type(() => ParameterResultWhereInput)
  where?: ParameterResultWhereInput;

  @ApiProperty({
    required: false,
    type: [ParameterResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ParameterResultOrderByInput], { nullable: true })
  @Type(() => ParameterResultOrderByInput)
  orderBy?: Array<ParameterResultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ParameterResultFindManyArgs as ParameterResultFindManyArgs };