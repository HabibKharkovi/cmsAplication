import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ParameterValueController } from "../parameterValue.controller";
import { ParameterValueService } from "../parameterValue.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  age: "exampleAge",
  ageGroup: "exampleAgeGroup",
  createdAt: new Date(),
  gender: "exampleGender",
  id: "exampleId",
  normalRange: "exampleNormalRange",
  other: "exampleOther",
  unit: "exampleUnit",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  age: "exampleAge",
  ageGroup: "exampleAgeGroup",
  createdAt: new Date(),
  gender: "exampleGender",
  id: "exampleId",
  normalRange: "exampleNormalRange",
  other: "exampleOther",
  unit: "exampleUnit",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    age: "exampleAge",
    ageGroup: "exampleAgeGroup",
    createdAt: new Date(),
    gender: "exampleGender",
    id: "exampleId",
    normalRange: "exampleNormalRange",
    other: "exampleOther",
    unit: "exampleUnit",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  age: "exampleAge",
  ageGroup: "exampleAgeGroup",
  createdAt: new Date(),
  gender: "exampleGender",
  id: "exampleId",
  normalRange: "exampleNormalRange",
  other: "exampleOther",
  unit: "exampleUnit",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ParameterValue", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ParameterValueService,
          useValue: service,
        },
      ],
      controllers: [ParameterValueController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /parameterValues", async () => {
    await request(app.getHttpServer())
      .post("/parameterValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /parameterValues", async () => {
    await request(app.getHttpServer())
      .get("/parameterValues")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /parameterValues/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parameterValues"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /parameterValues/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parameterValues"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /parameterValues existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/parameterValues")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/parameterValues")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
