import {Property} from "@tsed/common";

export class UserCreationModel {
  @Property()
  name: string;

  @Property()
  keys: string;
}

export class UserModel extends UserCreationModel {
  @Property()
  id: string;

  constructor(options: Partial<UserModel>) {
    super();

    this.id = options.id || this.id;
    this.name = options.name || this.name;
    this.keys = options.keys || this.keys;
  }
}
