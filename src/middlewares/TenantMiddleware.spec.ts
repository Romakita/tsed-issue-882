import { PlatformTest } from "@tsed/common";
import { TenantMiddleware } from "./TenantMiddleware";

describe("TenantMiddleware", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<TenantMiddleware>(TenantMiddleware);
    // const instance = PlatformTest.invoke<TenantMiddleware>(TenantMiddleware); // get fresh instance

    expect(instance).toBeInstanceOf(TenantMiddleware);
  });
});
