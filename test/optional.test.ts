describe("Optional Parameters", function () {
  it("should support null and undefined", function () {
    const sayHello = (name?: string | null) => {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info(`Hello`);
      }
    };

    sayHello("Syahdin");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
