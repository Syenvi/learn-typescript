import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: "1",
      name: "Toko ABC",
      nib: "123123123",
      npwp: "456456456",
    };

    seller.name = "Toko Syahdin";
    // seller.nib = '789789789'  Ini akan Error

    console.info(seller);
  });

  it("should support interface function", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Syahdin", "Raditya", "Hafid"];

    console.info(names);
  });

  it("should support indexable interface non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Syahdin Raditya",
      address: "Yogyakarta",
    };

    expect(dictionary["name"]).toBe("Syahdin Raditya");
    expect(dictionary["address"]).toBe("Yogyakarta");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Syahdin",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Raditya",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "Amelia",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Syahdin"));
  });

  it("should support intersection type", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Person = HasId & HasName;

    const person: Person = {
      id: "1",
      name: "Hafid",
    };

    console.info(person);
  });
});
