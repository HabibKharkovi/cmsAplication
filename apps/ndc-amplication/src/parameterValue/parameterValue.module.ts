import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParameterValueModuleBase } from "./base/parameterValue.module.base";
import { ParameterValueService } from "./parameterValue.service";
import { ParameterValueController } from "./parameterValue.controller";
import { ParameterValueResolver } from "./parameterValue.resolver";

@Module({
  imports: [ParameterValueModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParameterValueController],
  providers: [ParameterValueService, ParameterValueResolver],
  exports: [ParameterValueService],
})
export class ParameterValueModule {}
