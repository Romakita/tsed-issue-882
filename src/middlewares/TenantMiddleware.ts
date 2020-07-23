import {HeaderParams, Inject, Middleware, ProviderScope, Scope} from "@tsed/common";
import {UsersService} from "../services/UsersService";

@Middleware()
@Scope(ProviderScope.REQUEST)
export class TenantMiddleware {
  @Inject()
  usersService: UsersService;

  use(@HeaderParams("keyds") keyds: string) {
    this.usersService.keys = keyds;
  }
}
