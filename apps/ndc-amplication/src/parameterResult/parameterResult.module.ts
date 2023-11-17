import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParameterResultModuleBase } from "./base/parameterResult.module.base";
import { ParameterResultService } from "./parameterResult.service";
import { ParameterResultController } from "./parameterResult.controller";
import { ParameterResultResolver } from "./parameterResult.resolver";

@Module({
  imports: [ParameterResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParameterResultController],
  providers: [ParameterResultService, ParameterResultResolver],
  exports: [ParameterResultService],
})
export class ParameterResultModule {}
