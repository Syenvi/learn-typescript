describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Syahdin Raditya Hafid",
      age: 19,
    };

    person.age = 20;
    person.address = "Sidokerto Rt7 Rw2, Pati, Jawa Tengah";
    console.info(person);
  });
});
