describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Syahdin",
    };

    console.info(person);

    (person.id = "2"), (person.name = "Raditya");

    console.info(person);
  });
});
