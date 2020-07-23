import {Injectable, ProviderScope, Scope} from "@tsed/di";
import {v4} from "uuid";
import {UserCreationModel, UserModel} from "../models/UserModel";

@Injectable()
@Scope(ProviderScope.REQUEST)
export class UsersService {
  private _keys: string;

  get keys() {
    return this._keys;
  }

  set keys(keys: string) {
    this._keys = keys;
  }

  addUser(input: UserCreationModel): UserModel {
    return new UserModel({
      ...input,
      keys: this.keys,
      id: v4()
    });
  }
}
