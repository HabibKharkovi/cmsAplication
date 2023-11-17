import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LabTestModuleBase } from "./base/labTest.module.base";
import { LabTestService } from "./labTest.service";
import { LabTestController } from "./labTest.controller";
import { LabTestResolver } from "./labTest.resolver";

@Module({
  imports: [LabTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [LabTestController],
  providers: [LabTestService, LabTestResolver],
  exports: [LabTestService],
})
export class LabTestModule {}
