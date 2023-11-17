/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TestParameter } from "@prisma/client";

export class TestParameterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestParameterCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterCountArgs>
  ): Promise<number> {
    return this.prisma.testParameter.count(args);
  }

  async findMany<T extends Prisma.TestParameterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterFindManyArgs>
  ): Promise<TestParameter[]> {
    return this.prisma.testParameter.findMany(args);
  }
  async findOne<T extends Prisma.TestParameterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterFindUniqueArgs>
  ): Promise<TestParameter | null> {
    return this.prisma.testParameter.findUnique(args);
  }
  async create<T extends Prisma.TestParameterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterCreateArgs>
  ): Promise<TestParameter> {
    return this.prisma.testParameter.create<T>(args);
  }
  async update<T extends Prisma.TestParameterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterUpdateArgs>
  ): Promise<TestParameter> {
    return this.prisma.testParameter.update<T>(args);
  }
  async delete<T extends Prisma.TestParameterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestParameterDeleteArgs>
  ): Promise<TestParameter> {
    return this.prisma.testParameter.delete(args);
  }
}
