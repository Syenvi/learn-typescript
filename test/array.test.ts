describe("Array", function () {
  it("should same with javascript", function () {
    const name: string[] = ["Syahdin", "Raditya", "Hafid"];
    const values: number[] = [1, 2, 3];

    console.info(name);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["membaca", ",menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
  });

  it("should support tuple array", function () {
    const person: readonly [string, string, number] = ["Syahdin", "FE Dev", 20];
    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
  });
});
