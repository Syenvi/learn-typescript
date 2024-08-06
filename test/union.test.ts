describe("Union", function () {
  it("should support in typescript", function () {
    let sample: string | number | boolean = "Syahdin";

    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "number") {
        return value + 2;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      } else {
        return !value;
      }
    }

    expect(process("syahdin")).toBe("SYAHDIN");
    expect(process(2)).toBe(4);
    expect(process(true)).toBe(false);
  });
});
