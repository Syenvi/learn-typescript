import { Person } from "../src/person";

describe("Assertions", function () {
  it("should support assertions type", function () {
    const person: any = {
      age: 20,
      name: "Raditya",
    };

    const person2: Person = person as Person;

    console.info(person2);
  });
});
