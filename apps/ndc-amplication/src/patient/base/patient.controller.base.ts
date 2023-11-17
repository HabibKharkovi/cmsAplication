/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PatientService } from "../patient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientCreateInput } from "./PatientCreateInput";
import { PatientWhereInput } from "./PatientWhereInput";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { Patient } from "./Patient";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: PatientCreateInput): Promise<Patient> {
    return await this.service.create({
      data: data,
      select: {
        age: true,
        balance: true,
        cnicNo: true,
        contactNo: true,
        createdAt: true,
        data: true,
        discountPercentage: true,
        discountRupees: true,
        email: true,
        gender: true,
        id: true,
        mrNo: true,
        name: true,
        paid: true,
        password: true,
        pinNo: true,
        referBy: true,
        time: true,
        total: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        age: true,
        balance: true,
        cnicNo: true,
        contactNo: true,
        createdAt: true,
        data: true,
        discountPercentage: true,
        discountRupees: true,
        email: true,
        gender: true,
        id: true,
        mrNo: true,
        name: true,
        paid: true,
        password: true,
        pinNo: true,
        referBy: true,
        time: true,
        total: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        age: true,
        balance: true,
        cnicNo: true,
        contactNo: true,
        createdAt: true,
        data: true,
        discountPercentage: true,
        discountRupees: true,
        email: true,
        gender: true,
        id: true,
        mrNo: true,
        name: true,
        paid: true,
        password: true,
        pinNo: true,
        referBy: true,
        time: true,
        total: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          age: true,
          balance: true,
          cnicNo: true,
          contactNo: true,
          createdAt: true,
          data: true,
          discountPercentage: true,
          discountRupees: true,
          email: true,
          gender: true,
          id: true,
          mrNo: true,
          name: true,
          paid: true,
          password: true,
          pinNo: true,
          referBy: true,
          time: true,
          total: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          age: true,
          balance: true,
          cnicNo: true,
          contactNo: true,
          createdAt: true,
          data: true,
          discountPercentage: true,
          discountRupees: true,
          email: true,
          gender: true,
          id: true,
          mrNo: true,
          name: true,
          paid: true,
          password: true,
          pinNo: true,
          referBy: true,
          time: true,
          total: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
