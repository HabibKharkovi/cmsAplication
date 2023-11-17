import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParameterValueService } from "./parameterValue.service";
import { ParameterValueControllerBase } from "./base/parameterValue.controller.base";

@swagger.ApiTags("parameterValues")
@common.Controller("parameterValues")
export class ParameterValueController extends ParameterValueControllerBase {
  constructor(
    protected readonly service: ParameterValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
