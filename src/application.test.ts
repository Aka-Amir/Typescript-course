function getExpectedValue(data: string) {
  const array = data.split("");
  const length = [];

  while (array.length > 0) {
    const char = array.shift();
    if (char === "#") break;
    length.push(char);
  }

  array.splice(+length.join(""));
  return array.join("");
}

async function testCode(...inputs: string[]): Promise<boolean> {
  const applicationData = await import("./app");
  if ("main" in applicationData) {
    for (const item of inputs) {
      // const response = applicationData.main(item);
      const data = getExpectedValue(item);
      console.log(data);

      // if (response !== data) return false;
    }
    return true;
  } else {
    throw new Error("Application structure is not supported");
  }
}

testCode("3#123", "4#1234", "5#12345", "6#1#234567");
