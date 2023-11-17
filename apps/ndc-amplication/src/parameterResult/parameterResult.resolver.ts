import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParameterResultResolverBase } from "./base/parameterResult.resolver.base";
import { ParameterResult } from "./base/ParameterResult";
import { ParameterResultService } from "./parameterResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParameterResult)
export class ParameterResultResolver extends ParameterResultResolverBase {
  constructor(
    protected readonly service: ParameterResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
