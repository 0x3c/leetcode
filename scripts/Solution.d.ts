export default interface ISolution {
  /**
   * @description 文件名
   */
  filename: string;
  /**
   * @description 文件路径
   */
  path: string;
  /**
   * @description 题目 Id
   */
  solutionId: string;
  /**
   * @description 文件后缀
   */
  suffix: string;
  /**
   * @description 语言
   */
  language: string;
  /**
   * @description 信息
   */
  info: string;
  /**
   * @description 题目链接
   */
  link: string;
  /**
   * @description 题目难易度
   */
  difficulty: string;
  //   constructor: (filename: string) => this;
}

export interface SolutionConstructor {
  (filename: string): void;
}
