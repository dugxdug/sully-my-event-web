export class LocationFilter {

  constructor(
    public location: string,
    public price?: string,
    public radius?: number,
    public term = 'restraunts') {}
}
