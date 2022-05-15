export default class {
  content: string;

  isChecked: boolean;

  constructor(content: string, isChecked = false) {
    this.content = content;
    this.isChecked = isChecked;
  }
}
