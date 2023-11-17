import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParameterValueResolverBase } from "./base/parameterValue.resolver.base";
import { ParameterValue } from "./base/ParameterValue";
import { ParameterValueService } from "./parameterValue.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParameterValue)
export class ParameterValueResolver extends ParameterValueResolverBase {
  constructor(
    protected readonly service: ParameterValueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
