import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParameterResultService } from "./parameterResult.service";
import { ParameterResultControllerBase } from "./base/parameterResult.controller.base";

@swagger.ApiTags("parameterResults")
@common.Controller("parameterResults")
export class ParameterResultController extends ParameterResultControllerBase {
  constructor(
    protected readonly service: ParameterResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
