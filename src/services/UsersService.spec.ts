import { PlatformTest } from "@tsed/common";
import { UsersService } from "./UsersService";

describe("UsersService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<UsersService>(UsersService);
    // const instance = PlatformTest.invoke<UsersService>(UsersService); // get fresh instance

    expect(instance).toBeInstanceOf(UsersService);
  });
});
