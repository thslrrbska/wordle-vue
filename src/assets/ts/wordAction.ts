/**
 * 단어 입력 행동 제어
 */

import { findDictionary } from "@/api";

interface Actions {
  insertWord(char: string): void;
  removeWord(): void;
  confirmWord(): Promise<boolean>;
  initWord(): void;
}

export default class WordAction implements Actions {
  private word = "";
  private isFindingDictionary = false;
  constructor(private readonly limited = 5) {}
  insertWord(char: string): void {
    if (this.word.length < this.limited) this.word += char;
  }
  removeWord(): void {
    this.word = this.word.slice(0, -1);
  }
  async confirmWord(): Promise<boolean> {
    if (this.word.length === this.limited) {
      this.isFindingDictionary = true;
      try {
        const res = await findDictionary(this.word);
        if (res.data.length) return true;
        alert("단어를 찾을 수 없습니다.");
        return false;
      } catch (error) {
        alert("단어를 찾을 수 없습니다.");
        return false;
      } finally {
        this.isFindingDictionary = false;
      }
    } else {
      alert("단어를 전부 입력해주세요.");
      return false;
    }
  }

  initWord(): void {
    this.word = "";
  }

  get getIsFindingDictionary(): boolean {
    return this.isFindingDictionary;
  }

  get getWord(): string {
    return this.word;
  }
}
