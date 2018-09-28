import { Email } from './email.model';

export class EmailEvent extends Email {
  constructor(
    public sender: string,
    public subject: string,
    public body: string,
    public recipients: number[],
    public location: string,
    public meetingStarted: Date) {
    super(sender, subject, body, recipients);
  }
}
