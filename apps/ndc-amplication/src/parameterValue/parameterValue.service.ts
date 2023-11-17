import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParameterValueServiceBase } from "./base/parameterValue.service.base";

@Injectable()
export class ParameterValueService extends ParameterValueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
