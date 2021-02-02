// 15の倍数のとき"FizzBuzz"
// 5の倍数のとき"Buzz"
// 3の倍数のとき"Fizz"
// それ以外は引数をそのまま返す
export const fizzBuzz = (number: number): string | number => {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

// "https://randomuser.me/api/"から受けとったランダムな架空のユーザーをあれこれするサービス
export class RandomUserService {
  // todo anyの撲滅
  private data: any;
  public constructor(data: any) {
    this.data = data;
  }
  // genderが男であるかどうかを判定
  public async isMale(): Promise<boolean> {
    const gender = await this.data.results[0].gender;
    return gender === "male";
  }
}

// べき乗テスト
export const exponentiation = (numbers: [number, number]): number => {
  return numbers[0] ** numbers[1];
};
