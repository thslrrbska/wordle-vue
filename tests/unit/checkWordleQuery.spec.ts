type states = "correct_spot" | "wrong_spot" | "none_spot";
let answer: string, word: string, answerSet: Set<string>;
describe("wordleQueryCheck", () => {
  beforeEach(() => {
    answer = "WORLD";
    answerSet = new Set(answer.split(""));
  });

  it("correct_spot test", () => {
    word = "WORLD";
    const matchStates: states[] = word.split("").map((char, index) => {
      if (char === answer[index]) return "correct_spot";
      throw new Error("error");
    });

    expect(matchStates).toEqual([
      "correct_spot",
      "correct_spot",
      "correct_spot",
      "correct_spot",
      "correct_spot",
    ]);
  });

  it("wrong_spot test", () => {
    word = "OWLDR";
    const matchStates: states[] = word.split("").map((char, index) => {
      if (answerSet.has(char)) return "wrong_spot";
      throw new Error("error");
    });

    expect(matchStates).toEqual([
      "wrong_spot",
      "wrong_spot",
      "wrong_spot",
      "wrong_spot",
      "wrong_spot",
    ]);
  });

  it("none_spot test", () => {
    word = "ASHFG";
    const matchStates: states[] = word.split("").map((char, index) => {
      if (char != answer[index] && !answerSet.has(char)) return "none_spot";
      throw new Error("error");
    });

    expect(matchStates).toEqual([
      "none_spot",
      "none_spot",
      "none_spot",
      "none_spot",
      "none_spot",
    ]);
  });

  it("spot last_check", () => {
    word = "ROUND";
    const matchStates: states[] = word.split("").map((char, index) => {
      if (char === answer[index]) return "correct_spot";
      if (answerSet.has(char)) return "wrong_spot";
      if (char != answer[index] && !answerSet.has(char)) return "none_spot";
      throw new Error("error");
    });

    expect(matchStates).toEqual([
      "wrong_spot",
      "correct_spot",
      "none_spot",
      "none_spot",
      "correct_spot",
    ]);
  });
});
