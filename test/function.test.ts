describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      // Akan error jika tidak mengembalikan value berupa string
      return `Hello ${name}`;
    }

    expect(sayHello("amel")).toBe("Hello amel");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("amelia");
  });

  it("should support function parameter with default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Amelia")).toBe("Hello Amelia");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }
    expect(sayHello("Syahdin")).toBe("Hello Syahdin");
    expect(sayHello("Amelia", "Nurrisfa")).toBe("Hello Amelia Nurrisfa");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("syahdin")).toBe("SYAHDIN");
  });

  it("should support function for parameter", function () {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("amelia", toUpper)).toBe("Hello AMELIA");
    expect(
      sayHello("zahra", function (name: string): string {
        return name.toLocaleUpperCase();
      })
    ).toBe("Hello ZAHRA");
    expect(
      sayHello("risfa", (name: string): string => name.toUpperCase())
    ).toBe("Hello RISFA");
  });
});
