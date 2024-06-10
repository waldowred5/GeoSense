export type EntityData<T> = {
  '@iot.count'?: number;
  value: T[];
};

export type Datastream = {
  '@iot.id': number;
  '@iot.selfLink': string;
  'Observations@iot.navigationLink': string;
  description: string;
  name: string;
  observationType: string;
  observedArea: {
    type: string;
    coordinates: number[];
  };
  phenomenonTime: string;
  properties: {
    sen_id: number;
    data_type: string;
    data_usage: string;
    publish_yn: string;
    access_restriction: string;
  };
  resultTime: string;
  unitOfMeasurement: {
    name: string;
    symbol: string;
    definition: string;
  };
  FeatureOfInterest?: Feature | null;
};

export interface DatastreamsByFeature {
  [featureId: string]: Datastream[];
}

export type FeatureFeature = {
  type: string;
  coordinates: number[];
};

export type Feature = {
  '@iot.id': number;
  '@iot.selfLink': string;
  'Observations@iot.navigationLink': string;
  description: string;
  encodingType: string;
  feature: FeatureFeature | string;
  name: string;
  properties: {
    publish_yn: string;
    sen_id: string;
    type: string;
  };
};

export type Observation = {
  '@iot.id': number;
  phenomenonTime: string;
  parameters: {
    sen_id: number;
    publish_yn: string;
  };
  result: number;
  resultTime: string;
  resultQuality: {
    reason: string;
    status: string;
    quality: string;
    event_id: number;
  };
  '@iot.selfLink': string;
  'Datastream@iot.navigationLink': string;
  'FeatureOfInterest@iot.navigationLink': string;
  'MultiDatastream@iot.navigationLink': string;
};

export type Thing = {
  '@iot.id': number;
  '@iot.selfLink': string;
  Datastreams: Datastream[];
  description: string;
  name: string;
  properties: {
    publish_yn: string;
    sen_id: string;
    type: string;
  };
};
