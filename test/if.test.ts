describe("If Statement", function () {
  it("should support in typescript", function () {
    const examValue = 90;
    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", function () {
    const examValue = 80;
    const say = examValue >= 75 ? "Congratulation" : "Try Again";
    console.info(say);
  });

  it("should support switch statement", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "amelia":
          return "Hi Amelia";
        case "rona":
          return "Hi Rona";
        case "ain":
          return " Hi Ain";
        default:
          return "Hallo";
      }
    }

    console.info(sayHello("amelia"));
    console.info(sayHello("rona"));
    console.info(sayHello("ain"));
  });
});
