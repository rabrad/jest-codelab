export interface TestCaseArgumentsType {
  baseUrl: string;
  url: string;
}
export class Sample {
  set args(value: TestCaseArgumentsType) {
    this.arguments = value;
  }
  private arguments!: TestCaseArgumentsType;
  sampleTestFunction() {
    it('to check the before each execution effects in the test case', () => {
      console.log(this.arguments.url); // **expected**: sampleUrl **actual**: cannot set property url of undefined
    });
  }
}
