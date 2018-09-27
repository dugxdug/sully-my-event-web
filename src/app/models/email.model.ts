export class Email {

  constructor(
    public sender: string,
    public subject: string,
    public body: string,
    public recipients: number[]) {}
}
