import { SelectedLocation } from './location.model';

export interface Event {
  id: number;
  title: string;
  description: string;
  eventTime: string;
  locationId: number;
  imageUrl: string;
  createdBy: string;
  createdById: number;
  hasVoted: boolean;
  selectedLocations: SelectedLocation[];
  eventLocations: {locationId: number}[];
  eventUsers: {userId: number, locationId?: number, eventId: number}[];
  pollResults: any;
  countDown: any;

}
