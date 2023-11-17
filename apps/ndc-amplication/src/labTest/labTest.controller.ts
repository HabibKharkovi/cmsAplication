import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabTestService } from "./labTest.service";
import { LabTestControllerBase } from "./base/labTest.controller.base";

@swagger.ApiTags("labTests")
@common.Controller("labTests")
export class LabTestController extends LabTestControllerBase {
  constructor(
    protected readonly service: LabTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
