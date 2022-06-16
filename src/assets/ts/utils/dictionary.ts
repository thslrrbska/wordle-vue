export const getWordMatchStates = (
  word: string,
  answerMap: Map<string, number[]>
) => {
  type states = "correct_spot" | "wrong_spot" | "none_spot";
  const matchStates: states[] = word.split("").map((char, index) => {
    if (answerMap.has(char)) {
      const matched = word.match(new RegExp(char, "gi"));
      const wordSize = matched && matched.length;
      const answerPos = answerMap.get(char);
      if (
        wordSize &&
        wordSize >= 2 &&
        answerPos &&
        answerPos.length > wordSize
      ) {
        return "none_spot";
      }
      return answerPos && answerPos.indexOf(index) >= 0
        ? "correct_spot"
        : "wrong_spot";
    } else {
      return "none_spot";
    }
  });

  return matchStates;
};
