import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello syahdin", function () {
    expect(sayHello("syahdin")).toBe("Hello syahdin");
  });
});
