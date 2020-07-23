import { PlatformTest } from "@tsed/common";
import { UserModel } from "./UserModel";

describe("UserModel", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<UserModel>(UserModel);
    // const instance = PlatformTest.invoke<UserModel>(UserModel); // get fresh instance

    expect(instance).toBeInstanceOf(UserModel);
  });
});
