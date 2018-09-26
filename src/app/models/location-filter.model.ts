export class LocationFilter {

  constructor(
    public location: string,
    public open_at: number,
    public price?: string,
    public radius?: number,
    public term = 'restraunts') {}
}
