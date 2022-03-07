export const RACING_CATEGORIES = [
  {
    id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
    name: 'Greyhound Racing',
  },
  {
    id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
    name: 'Harness Racing',
  },
  {
    id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
    name: 'Horse Racing',
  },
];

export const RACING_IDS = [
  '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  '161d9be2-e909-4326-8c2c-35ed71fb460b',
  '4a2788f8-e825-4d36-9894-efd4baf1cfae',
];

export type RaceCardItemProps = {
  RaceCardItem: {
    meeting_name: string;
    race_name: string;
    race_id: string;
    advertised_start: AdvertisedStartType;
  };
};

export interface RaceDataType {
  next_to_go_ids: string[];
  race_summaries: RaceSummaryType;
}

export interface RaceSummaryType {
  race_id: string;
  race_name: string;
  race_number: number;
  meeting_id: string;
  meeting_name: string;
  category_id: string;
  advertised_start: AdvertisedStartType;
  race_form: RaceFormType;
  venue_id: string;
  venue_name: string;
  venue_state: string;
  venue_country: string;
}

export interface RaceFormType {
  distance: number;
  distance_type: DistanceType;
  distance_type_id: string;
  track_condition: TrackConditionType;
  track_condition_id: string;
  weather: WeatherType;
  weather_id: string;
  race_comment: string;
  additional_data: string;
  generated: number;
  silk_base_url: string;
  race_comment_alternative: string;
}

export interface AdvertisedStartType {
  seconds: number;
}

export interface WeatherType {
  id: string;
  name: string;
  short_name: string;
  icon_uri: string;
}

export interface DistanceType {
  id: string;
  name: string;
  short_name: string;
}
export interface TrackConditionType {
  id: string;
  name: string;
  short_name: string;
}

export type DictionaryType = {
  [key: string]: any;
};
