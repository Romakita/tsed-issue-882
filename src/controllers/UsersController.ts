import {
  BodyParams,
  Controller,
  HeaderParams,
  Inject,
  Post,
  ProviderScope,
  Scope,
  Status,
  UseBefore
} from "@tsed/common";
import {TenantMiddleware} from "../middlewares/TenantMiddleware";
import {UserCreationModel, UserModel} from "../models/UserModel";
import {UsersService} from "../services/UsersService";

@Controller("/users")
@Scope(ProviderScope.REQUEST)
@UseBefore(TenantMiddleware)
export class UsersController {
  @Inject()
  usersServices: UsersService;

  @Post("/")
  @Status(201)
  addUser(@BodyParams() user: UserCreationModel, @HeaderParams("keyds") keyds: string): UserModel {
    console.log("user", user);
    return this.usersServices.addUser(user);
  }
}
