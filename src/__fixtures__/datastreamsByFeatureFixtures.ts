import { DatastreamsByFeature } from "../types.ts";

export const datastreamsByFeatureFixture = {
  "14": [
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA01 - Calculated (m)",
      "@iot.id": 92,
      "name": "GGA01_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 851,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(92)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(92)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(92)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(92)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(92)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA01 - Measured (mbar)",
      "@iot.id": 48,
      "name": "GGA01_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 797,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(48)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(48)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(48)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(48)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(48)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA01 - Measured (C)",
      "@iot.id": 15,
      "name": "GGA01_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 777,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(15)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(15)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(15)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(15)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(15)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA01 - Measured (uS/cm)",
      "@iot.id": 28,
      "name": "GGA01_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 787,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(28)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(28)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(28)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(28)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(28)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGA01 - Measured (mg/L)",
      "@iot.id": 51,
      "name": "GGA01_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 817,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(51)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(51)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(51)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(51)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(51)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA01 - Calculated (m)",
      "@iot.id": 74,
      "name": "GGA01_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 861,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(74)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(74)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(74)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(74)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(74)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA01 - Calculated (m)",
      "@iot.id": 83,
      "name": "GGA01_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 841,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(83)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(83)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(83)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(83)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(83)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA01 - Measured (PSU)",
      "@iot.id": 17,
      "name": "GGA01_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 807,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(17)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(17)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(17)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(17)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(17)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 14,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": -9.874,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155160,
          "active_yn": "Y",
          "from_date": "2020-12-11T11:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(14)"
      }
    }
  ],
  "15": [
    {
      "description": "TDS from BGS Groundwater Logger GGA08 - Measured (mg/L)",
      "@iot.id": 38,
      "name": "GGA08_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "properties": {
        "sen_id": 823,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(38)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(38)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(38)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(38)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(38)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 15,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -8.67,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155165,
          "active_yn": "Y",
          "from_date": "2021-03-25T11:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(15)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA08 - Calculated (m)",
      "@iot.id": 77,
      "name": "GGA08_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "properties": {
        "sen_id": 857,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(77)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(77)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(77)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(77)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(77)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 15,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -8.67,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155165,
          "active_yn": "Y",
          "from_date": "2021-03-25T11:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(15)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA08 - Measured (mbar)",
      "@iot.id": 18,
      "name": "GGA08_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "properties": {
        "sen_id": 803,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(18)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(18)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(18)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(18)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(18)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 15,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -8.67,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155165,
          "active_yn": "Y",
          "from_date": "2021-03-25T11:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(15)"
      }
    }
  ],
  "17": [
    {
      "description": "Conductivity from BGS Groundwater Logger GGA05 - Measured (uS/cm)",
      "@iot.id": 43,
      "name": "GGA05_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:45:00.000Z",
      "properties": {
        "sen_id": 790,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(43)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(43)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(43)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(43)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(43)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA05 - Calculated (mbar)",
      "@iot.id": 57,
      "name": "GGA05_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 834,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(57)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(57)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(57)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(57)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(57)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA05 - Calculated (m)",
      "@iot.id": 68,
      "name": "GGA05_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 864,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(68)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(68)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(68)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(68)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(68)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA05 - Measured (mbar)",
      "@iot.id": 39,
      "name": "GGA05_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:00:00.000Z",
      "properties": {
        "sen_id": 800,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(39)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(39)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(39)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(39)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(39)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA05 - Measured (C)",
      "@iot.id": 41,
      "name": "GGA05_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:00:00.000Z",
      "properties": {
        "sen_id": 780,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(41)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(41)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(41)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(41)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(41)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA05 - Calculated (m)",
      "@iot.id": 61,
      "name": "GGA05_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 854,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(61)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(61)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(61)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(61)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(61)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA05 - Calculated (m)",
      "@iot.id": 56,
      "name": "GGA05_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 844,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(56)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(56)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(56)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(56)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(56)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 17,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -12.964,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155147,
          "to_date": "2020-08-11T13:15:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(17)"
      }
    }
  ],
  "18": [
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA01 - Calculated (mbar)",
      "@iot.id": 66,
      "name": "GGA01_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200163329,
          55.839415117
        ]
      },
      "phenomenonTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 831,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T12:00:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(66)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(66)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(66)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(66)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(66)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA01",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.2001633287587,
            55.8394151172741
          ]
        },
        "@iot.id": 18,
        "name": "BGS Groundwater Logger GGA01",
        "properties": {
          "z": 4.546,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155144,
          "to_date": "2020-12-11T11:30:00",
          "active_yn": "N",
          "from_date": "2020-08-11T12:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(18)"
      }
    }
  ],
  "19": [
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA03r - Measured (mbar)",
      "@iot.id": 10,
      "name": "GGA03R_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 798,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(10)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(10)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(10)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(10)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(10)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA03r - Calculated (m)",
      "@iot.id": 60,
      "name": "GGA03R_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 862,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(60)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(60)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(60)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(60)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(60)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA03r - Calculated (mbar)",
      "@iot.id": 58,
      "name": "GGA03R_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 832,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(58)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(58)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(58)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(58)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(58)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA03r - Measured (uS/cm)",
      "@iot.id": 40,
      "name": "GGA03R_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 788,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(40)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(40)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(40)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(40)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(40)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA03r - Measured (C)",
      "@iot.id": 7,
      "name": "GGA03R_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 778,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(7)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(7)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(7)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(7)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(7)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA03r - Calculated (m)",
      "@iot.id": 72,
      "name": "GGA03R_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 852,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(72)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(72)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(72)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(72)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(72)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA03r - Measured (PSU)",
      "@iot.id": 14,
      "name": "GGA03R_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 808,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(14)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(14)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(14)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(14)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(14)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGA03r - Measured (mg/L)",
      "@iot.id": 42,
      "name": "GGA03R_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 818,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(42)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(42)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(42)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(42)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(42)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA03r - Calculated (m)",
      "@iot.id": 53,
      "name": "GGA03R_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200313752,
          55.839250654
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 842,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(53)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(53)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(53)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(53)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(53)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA03r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20031375193632,
            55.83925065351
          ]
        },
        "@iot.id": 19,
        "name": "BGS Groundwater Logger GGA03r",
        "properties": {
          "z": -13.783,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155145,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(19)"
      }
    }
  ],
  "21": [
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA04 - Measured (C)",
      "@iot.id": 52,
      "name": "GGA04_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 779,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(52)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(52)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(52)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(52)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(52)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 21,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -3.34,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155154,
          "to_date": "2021-02-24T10:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(21)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA04 - Measured (uS/cm)",
      "@iot.id": 21,
      "name": "GGA04_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 789,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(21)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(21)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(21)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(21)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(21)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 21,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -3.34,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155154,
          "to_date": "2021-02-24T10:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(21)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA04 - Measured (mbar)",
      "@iot.id": 34,
      "name": "GGA04_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 799,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(34)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(34)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(34)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(34)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(34)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 21,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -3.34,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155154,
          "to_date": "2021-02-24T10:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(21)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGA04 - Measured (mg/L)",
      "@iot.id": 4,
      "name": "GGA04_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 819,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(4)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(4)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(4)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(4)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(4)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 21,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -3.34,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155154,
          "to_date": "2021-02-24T10:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(21)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA04 - Measured (PSU)",
      "@iot.id": 50,
      "name": "GGA04_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 809,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(50)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(50)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(50)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(50)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(50)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 21,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -3.34,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155154,
          "to_date": "2021-02-24T10:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:30:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(21)"
      }
    }
  ],
  "22": [
    {
      "description": "Salinity from BGS Groundwater Logger GGA05 - Measured (PSU)",
      "@iot.id": 9,
      "name": "GGA05_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:15:00.000Z",
      "properties": {
        "sen_id": 810,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(9)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(9)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(9)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(9)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(9)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 22,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -10.694,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155155,
          "to_date": "2021-03-23T12:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(22)"
      }
    }
  ],
  "23": [
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA04 - Calculated (m)",
      "@iot.id": 55,
      "name": "GGA04_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 863,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(55)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(55)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(55)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(55)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(55)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 23,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -4.86,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155161,
          "active_yn": "Y",
          "from_date": "2021-02-24T10:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(23)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA04 - Calculated (m)",
      "@iot.id": 67,
      "name": "GGA04_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 843,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(67)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(67)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(67)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(67)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(67)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 23,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -4.86,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155161,
          "active_yn": "Y",
          "from_date": "2021-02-24T10:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(23)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA04 - Calculated (mbar)",
      "@iot.id": 54,
      "name": "GGA04_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 833,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(54)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(54)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(54)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(54)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(54)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 23,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -4.86,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155161,
          "active_yn": "Y",
          "from_date": "2021-02-24T10:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(23)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA04 - Calculated (m)",
      "@iot.id": 59,
      "name": "GGA04_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199763807,
          55.837714666
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 853,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(59)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(59)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(59)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(59)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(59)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19976380683195,
            55.837714666124
          ]
        },
        "@iot.id": 23,
        "name": "BGS Groundwater Logger GGA04",
        "properties": {
          "z": -4.86,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155161,
          "active_yn": "Y",
          "from_date": "2021-02-24T10:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(23)"
      }
    }
  ],
  "25": [
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA08 - Calculated (m)",
      "@iot.id": 80,
      "name": "GGA08_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "properties": {
        "sen_id": 867,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(80)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(80)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(80)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(80)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(80)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA08 - Calculated (m)",
      "@iot.id": 75,
      "name": "GGA08_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "properties": {
        "sen_id": 847,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(75)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(75)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(75)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(75)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(75)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA08 - Measured (uS/cm)",
      "@iot.id": 13,
      "name": "GGA08_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "properties": {
        "sen_id": 793,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(13)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(13)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(13)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(13)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(13)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA08 - Calculated (mbar)",
      "@iot.id": 89,
      "name": "GGA08_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "properties": {
        "sen_id": 837,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T04:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(89)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(89)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(89)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(89)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(89)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA08 - Measured (C)",
      "@iot.id": 32,
      "name": "GGA08_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "properties": {
        "sen_id": 783,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(32)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(32)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(32)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(32)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(32)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA08 - Measured (PSU)",
      "@iot.id": 26,
      "name": "GGA08_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201231712,
          55.838254603
        ]
      },
      "phenomenonTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "properties": {
        "sen_id": 813,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:15:00.000Z/2022-02-07T03:00:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(26)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(26)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(26)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(26)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(26)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA08",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20123171211026,
            55.838254603326
          ]
        },
        "@iot.id": 25,
        "name": "BGS Groundwater Logger GGA08",
        "properties": {
          "z": -1.63,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155158,
          "to_date": "2021-03-25T11:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T11:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(25)"
      }
    }
  ],
  "26": [
    {
      "description": "TDS from BGS Groundwater Logger GGB05 - Measured (mg/L)",
      "@iot.id": 31,
      "name": "GGB05_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 826,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(31)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(31)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(31)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(31)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(31)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 26,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -3.742,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155156,
          "to_date": "2020-09-14T12:00:00",
          "active_yn": "N",
          "from_date": "2020-08-11T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(26)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGB05 - Measured (uS/cm)",
      "@iot.id": 6,
      "name": "GGB05_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 796,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(6)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(6)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(6)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(6)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(6)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 26,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -3.742,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155156,
          "to_date": "2020-09-14T12:00:00",
          "active_yn": "N",
          "from_date": "2020-08-11T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(26)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGB05 - Measured (PSU)",
      "@iot.id": 25,
      "name": "GGB05_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 816,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(25)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(25)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(25)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(25)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(25)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 26,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -3.742,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155156,
          "to_date": "2020-09-14T12:00:00",
          "active_yn": "N",
          "from_date": "2020-08-11T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(26)"
      }
    }
  ],
  "27": [
    {
      "description": "TDS from BGS Groundwater Logger GGA05 - Measured (mg/L)",
      "@iot.id": 33,
      "name": "GGA05_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199618692,
          55.8376903
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:15:00.000Z",
      "properties": {
        "sen_id": 820,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2022-03-03T13:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(33)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(33)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(33)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(33)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(33)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19961869207114,
            55.8376902997736
          ]
        },
        "@iot.id": 27,
        "name": "BGS Groundwater Logger GGA05",
        "properties": {
          "z": -7.734,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155163,
          "active_yn": "Y",
          "from_date": "2021-03-23T12:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(27)"
      }
    }
  ],
  "29": [
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA07 - Measured (C)",
      "@iot.id": 20,
      "name": "GGA07_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 782,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(20)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(20)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(20)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(20)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(20)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 29,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -2.887,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155157,
          "to_date": "2021-03-25T13:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T09:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(29)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA07 - Measured (PSU)",
      "@iot.id": 45,
      "name": "GGA07_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 812,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(45)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(45)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(45)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(45)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(45)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 29,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -2.887,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155157,
          "to_date": "2021-03-25T13:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T09:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(29)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA07 - Calculated (m)",
      "@iot.id": 71,
      "name": "GGA07_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "properties": {
        "sen_id": 846,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(71)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(71)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(71)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(71)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(71)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 29,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -2.887,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155157,
          "to_date": "2021-03-25T13:45:00",
          "active_yn": "N",
          "from_date": "2020-09-16T09:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(29)"
      }
    }
  ],
  "31": [
    {
      "description": "TDS from BGS Groundwater Logger GGA07 - Measured (mg/L)",
      "@iot.id": 37,
      "name": "GGA07_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T13:30:00.000Z",
      "properties": {
        "sen_id": 822,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T13:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(37)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(37)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(37)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(37)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(37)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA07 - Measured (uS/cm)",
      "@iot.id": 22,
      "name": "GGA07_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "properties": {
        "sen_id": 792,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:15:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(22)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(22)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(22)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(22)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(22)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA07 - Measured (mbar)",
      "@iot.id": 3,
      "name": "GGA07_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T13:30:00.000Z",
      "properties": {
        "sen_id": 802,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T13:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(3)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(3)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(3)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(3)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(3)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA07 - Calculated (m)",
      "@iot.id": 76,
      "name": "GGA07_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "properties": {
        "sen_id": 866,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(76)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(76)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(76)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(76)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(76)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA07 - Calculated (m)",
      "@iot.id": 91,
      "name": "GGA07_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "properties": {
        "sen_id": 856,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(91)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(91)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(91)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(91)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(91)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA07 - Calculated (mbar)",
      "@iot.id": 63,
      "name": "GGA07_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.20117246,
          55.83833655
        ]
      },
      "phenomenonTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "properties": {
        "sen_id": 836,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T10:45:00.000Z/2022-03-03T14:30:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(63)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(63)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(63)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(63)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(63)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA07",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20117245955585,
            55.8383365501884
          ]
        },
        "@iot.id": 31,
        "name": "BGS Groundwater Logger GGA07",
        "properties": {
          "z": -8.577,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155164,
          "active_yn": "Y",
          "from_date": "2021-03-25T13:45:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(31)"
      }
    }
  ],
  "35": [
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA09r - Calculated (m)",
      "@iot.id": 78,
      "name": "GGA09R_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 858,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(78)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(78)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(78)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(78)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(78)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 35,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 1.124,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155151,
          "to_date": "2020-12-10T13:15:00",
          "active_yn": "N",
          "from_date": "2020-08-11T11:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(35)"
      }
    }
  ],
  "36": [
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGB04 - Calculated (mbar)",
      "@iot.id": 69,
      "name": "GGB04_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 839,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(69)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(69)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(69)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(69)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(69)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGB04 - Calculated (m)",
      "@iot.id": 70,
      "name": "GGB04_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 869,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(70)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(70)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(70)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(70)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(70)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGB04 - Measured (mbar)",
      "@iot.id": 36,
      "name": "GGB04_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 805,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(36)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(36)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(36)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(36)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(36)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGB04 - Measured (uS/cm)",
      "@iot.id": 46,
      "name": "GGB04_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 795,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(46)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(46)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(46)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(46)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(46)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGB04 - Measured (C)",
      "@iot.id": 44,
      "name": "GGB04_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 785,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(44)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(44)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(44)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(44)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(44)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGB04 - Calculated (m)",
      "@iot.id": 88,
      "name": "GGB04_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 859,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(88)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(88)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(88)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(88)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(88)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGB04 - Measured (mg/L)",
      "@iot.id": 12,
      "name": "GGB04_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 825,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(12)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(12)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(12)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(12)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(12)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGB04 - Calculated (m)",
      "@iot.id": 81,
      "name": "GGB04_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 849,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(81)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(81)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(81)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(81)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(81)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGB04 - Measured (PSU)",
      "@iot.id": 8,
      "name": "GGB04_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199429152,
          55.836031028
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 815,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(8)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(8)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(8)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(8)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(8)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB04",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19942915230115,
            55.8360310281486
          ]
        },
        "@iot.id": 36,
        "name": "BGS Groundwater Logger GGB04",
        "properties": {
          "z": 0.041,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155152,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(36)"
      }
    }
  ],
  "37": [
    {
      "description": "Barometric Pressure from BGS GGERFS Barometer - Measured (mbar)",
      "@iot.id": 1,
      "name": "GGERFS_01 Barometric Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201199802,
          55.838255175
        ]
      },
      "phenomenonTime": "2020-03-16T14:02:18.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 828,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:02:18.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(1)/Thing",
      "FeatureOfInterest": {
        "description": "BGS GGERFS Barometer",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20119980206699,
            55.8382551745062
          ]
        },
        "@iot.id": 37,
        "name": "BGS GGERFS Barometer",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 162740041,
          "active_yn": "Y",
          "from_date": "2020-01-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(37)"
      }
    },
    {
      "description": "Air Temperature from BGS GGERFS Barometer - Measured (C)",
      "@iot.id": 23,
      "name": "GGERFS_01 Air Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201199802,
          55.838255175
        ]
      },
      "phenomenonTime": "2020-03-16T14:02:18.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 827,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:02:18.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(23)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(23)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(23)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(23)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(23)/Thing",
      "FeatureOfInterest": {
        "description": "BGS GGERFS Barometer",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20119980206699,
            55.8382551745062
          ]
        },
        "@iot.id": 37,
        "name": "BGS GGERFS Barometer",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 162740041,
          "active_yn": "Y",
          "from_date": "2020-01-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(37)"
      }
    }
  ],
  "40": [
    {
      "description": "Head of Water from BGS Groundwater Logger GGB05 - Calculated (m)",
      "@iot.id": 84,
      "name": "GGB05_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 850,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(84)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(84)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(84)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(84)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(84)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 40,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -13.912,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155153,
          "to_date": "2020-08-11T14:00:00",
          "active_yn": "N",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(40)"
      }
    }
  ],
  "42": [
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGB05 - Measured (mbar)",
      "@iot.id": 16,
      "name": "GGB05_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 806,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(16)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(16)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(16)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(16)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(16)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 42,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": 1.048,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155159,
          "to_date": "2020-12-15T11:00:00",
          "active_yn": "N",
          "from_date": "2020-09-14T12:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(42)"
      }
    }
  ],
  "43": [
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA06r - Calculated (mbar)",
      "@iot.id": 62,
      "name": "GGA06R_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 835,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(62)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(62)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(62)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(62)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(62)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA06r - Calculated (m)",
      "@iot.id": 64,
      "name": "GGA06R_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 865,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(64)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(64)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(64)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(64)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(64)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA06r - Measured (uS/cm)",
      "@iot.id": 11,
      "name": "GGA06R_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 791,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(11)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(11)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(11)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(11)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(11)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGA06r - Calculated (m)",
      "@iot.id": 73,
      "name": "GGA06R_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 855,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(73)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(73)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(73)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(73)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(73)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA06r - Measured (mbar)",
      "@iot.id": 19,
      "name": "GGA06R_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 801,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(19)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(19)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(19)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(19)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(19)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA06r - Calculated (m)",
      "@iot.id": 65,
      "name": "GGA06R_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 845,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(65)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(65)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(65)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(65)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(65)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA06r - Measured (PSU)",
      "@iot.id": 29,
      "name": "GGA06R_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 811,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(29)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(29)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(29)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(29)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(29)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA06r - Measured (C)",
      "@iot.id": 5,
      "name": "GGA06R_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 781,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(5)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(5)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(5)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(5)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(5)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGA06r - Measured (mg/L)",
      "@iot.id": 2,
      "name": "GGA06R_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199457116,
          55.83765724
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 821,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(2)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(2)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(2)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(2)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(2)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA06r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19945711559159,
            55.8376572403214
          ]
        },
        "@iot.id": 43,
        "name": "BGS Groundwater Logger GGA06r",
        "properties": {
          "z": 0.611,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 170155148,
          "active_yn": "Y",
          "from_date": "2020-03-16T14:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(43)"
      }
    }
  ],
  "47": [
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGA09r - Calculated (m)",
      "@iot.id": 85,
      "name": "GGA09R_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 868,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(85)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(85)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(85)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(85)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(85)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Head of Water from BGS Groundwater Logger GGA09r - Calculated (m)",
      "@iot.id": 90,
      "name": "GGA09R_01 Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 848,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(90)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(90)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(90)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(90)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(90)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGA09r - Calculated (mbar)",
      "@iot.id": 79,
      "name": "GGA09R_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 838,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(79)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(79)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(79)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(79)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(79)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Water Temperature from BGS Groundwater Logger GGA09r - Measured (C)",
      "@iot.id": 30,
      "name": "GGA09R_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 784,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(30)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(30)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(30)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(30)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(30)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Salinity from BGS Groundwater Logger GGA09r - Measured (PSU)",
      "@iot.id": 49,
      "name": "GGA09R_01 Salinity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 814,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(49)",
      "unitOfMeasurement": {
        "name": "Practical Salinity Unit",
        "symbol": "PSU",
        "definition": "ucum:[ppth] approx."
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(49)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(49)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(49)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(49)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Absolute Pressure from BGS Groundwater Logger GGA09r - Measured (mbar)",
      "@iot.id": 35,
      "name": "GGA09R_01 Absolute Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 804,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(35)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(35)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(35)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(35)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(35)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "Conductivity from BGS Groundwater Logger GGA09r - Measured (uS/cm)",
      "@iot.id": 27,
      "name": "GGA09R_01 Conductivity",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 794,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(27)",
      "unitOfMeasurement": {
        "name": "micro Siemens per centimetre",
        "symbol": "uS/cm",
        "definition": "ucum:uS/cm"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(27)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(27)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(27)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(27)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    },
    {
      "description": "TDS from BGS Groundwater Logger GGA09r - Measured (mg/L)",
      "@iot.id": 24,
      "name": "GGA09R_01 TDS",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.201306919,
          55.838172371
        ]
      },
      "phenomenonTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 824,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-08-11T11:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(24)",
      "unitOfMeasurement": {
        "name": "milligrammes per litre",
        "symbol": "mg/L",
        "definition": "ucum:mg/L"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(24)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(24)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(24)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(24)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGA09r",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20130691940609,
            55.8381723708354
          ]
        },
        "@iot.id": 47,
        "name": "BGS Groundwater Logger GGA09r",
        "properties": {
          "z": 0.884,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123824,
          "active_yn": "Y",
          "from_date": "2020-12-10T13:15:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(47)"
      }
    }
  ],
  "48": [
    {
      "description": "Water Temperature from BGS Groundwater Logger GGB05 - Measured (C)",
      "@iot.id": 47,
      "name": "GGB05_01 Water Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 786,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(47)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(47)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(47)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(47)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(47)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 48,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": 0.958,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 172123825,
          "to_date": "2021-02-23T11:15:00",
          "active_yn": "N",
          "from_date": "2020-12-15T11:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(48)"
      }
    }
  ],
  "49": [
    {
      "description": "Water Level maOD from BGS Groundwater Logger GGB05 - Calculated (m)",
      "@iot.id": 86,
      "name": "GGB05_01 Water Level maOD",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 870,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(86)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(86)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(86)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(86)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(86)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 49,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -7.822,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 176373686,
          "active_yn": "Y",
          "from_date": "2021-08-20T12:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(49)"
      }
    },
    {
      "description": "Pressure Head of Water from BGS Groundwater Logger GGB05 - Calculated (mbar)",
      "@iot.id": 87,
      "name": "GGB05_01 Pressure Head of Water",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 840,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(87)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(87)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(87)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(87)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(87)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 49,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -7.822,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 176373686,
          "active_yn": "Y",
          "from_date": "2021-08-20T12:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(49)"
      }
    },
    {
      "description": "Water Level mbd from BGS Groundwater Logger GGB05 - Calculated (m)",
      "@iot.id": 82,
      "name": "GGB05_01 Water Level mbd",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199434223,
          55.836120811
        ]
      },
      "phenomenonTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "properties": {
        "sen_id": 860,
        "data_type": "Calculated",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2020-03-16T14:00:00.000Z/2023-07-11T23:45:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(82)",
      "unitOfMeasurement": {
        "name": "metre",
        "symbol": "m",
        "definition": "ucum:m"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(82)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(82)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(82)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(82)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Groundwater Logger GGB05",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19943422291002,
            55.836120811075
          ]
        },
        "@iot.id": 49,
        "name": "BGS Groundwater Logger GGB05",
        "properties": {
          "z": -7.822,
          "type": "SEN_LOC",
          "z_crs": "maOD",
          "sen_id": 176373686,
          "active_yn": "Y",
          "from_date": "2021-08-20T12:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(49)"
      }
    }
  ],
  "55": [
    {
      "description": "Carbon Dioxide from BGS Site 5 GasClam - Measured (%)",
      "@iot.id": 93,
      "name": "GGS05_01 Carbon Dioxide",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199517553,
          55.835948273
        ]
      },
      "phenomenonTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "properties": {
        "sen_id": 904,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(93)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(93)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(93)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(93)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(93)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 5 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19951755302478,
            55.835948273152
          ]
        },
        "@iot.id": 55,
        "name": "BGS Site 5 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927878,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(55)"
      }
    },
    {
      "description": "Temperature from BGS Site 5 GasClam - Measured (C)",
      "@iot.id": 108,
      "name": "GGS05_01 Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199517553,
          55.835948273
        ]
      },
      "phenomenonTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "properties": {
        "sen_id": 910,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(108)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(108)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(108)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(108)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(108)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 5 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19951755302478,
            55.835948273152
          ]
        },
        "@iot.id": 55,
        "name": "BGS Site 5 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927878,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(55)"
      }
    },
    {
      "description": "Oxygen from BGS Site 5 GasClam - Measured (%)",
      "@iot.id": 101,
      "name": "GGS05_01 Oxygen",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199517553,
          55.835948273
        ]
      },
      "phenomenonTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "properties": {
        "sen_id": 906,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(101)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(101)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(101)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(101)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(101)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 5 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19951755302478,
            55.835948273152
          ]
        },
        "@iot.id": 55,
        "name": "BGS Site 5 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927878,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(55)"
      }
    },
    {
      "description": "Barometric Pressure from BGS Site 5 GasClam - Measured (mbar)",
      "@iot.id": 104,
      "name": "GGS05_01 Barometric Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199517553,
          55.835948273
        ]
      },
      "phenomenonTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "properties": {
        "sen_id": 911,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(104)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(104)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(104)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(104)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(104)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 5 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19951755302478,
            55.835948273152
          ]
        },
        "@iot.id": 55,
        "name": "BGS Site 5 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927878,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(55)"
      }
    },
    {
      "description": "Methane from BGS Site 5 GasClam - Measured (%)",
      "@iot.id": 100,
      "name": "GGS05_01 Methane",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.199517553,
          55.835948273
        ]
      },
      "phenomenonTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "properties": {
        "sen_id": 905,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2022-02-24T14:24:00.000Z/2023-10-03T15:19:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(100)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(100)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(100)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(100)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(100)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 5 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.19951755302478,
            55.835948273152
          ]
        },
        "@iot.id": 55,
        "name": "BGS Site 5 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927878,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(55)"
      }
    }
  ],
  "59": [
    {
      "description": "Temperature from BGS Site 1 GasClam - Measured (C)",
      "@iot.id": 94,
      "name": "GGS01_01 Temperature",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200154198,
          55.839253508
        ]
      },
      "phenomenonTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "properties": {
        "sen_id": 901,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(94)",
      "unitOfMeasurement": {
        "name": "Temperature in Degrees Celsius",
        "symbol": "C",
        "definition": "ucum:Cel"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(94)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(94)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(94)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(94)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 1 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20024773442308,
            55.8394455662063
          ]
        },
        "@iot.id": 59,
        "name": "BGS Site 1 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927877,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(59)"
      }
    },
    {
      "description": "Barometric Pressure from BGS Site 1 GasClam - Measured (mbar)",
      "@iot.id": 102,
      "name": "GGS01_01 Barometric Pressure",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200154198,
          55.839253508
        ]
      },
      "phenomenonTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "properties": {
        "sen_id": 902,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(102)",
      "unitOfMeasurement": {
        "name": "Pressure in Millibar",
        "symbol": "mbar",
        "definition": "ucum:mbar"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(102)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(102)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(102)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(102)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 1 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20024773442308,
            55.8394455662063
          ]
        },
        "@iot.id": 59,
        "name": "BGS Site 1 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927877,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(59)"
      }
    },
    {
      "description": "Methane from BGS Site 1 GasClam - Measured (%)",
      "@iot.id": 103,
      "name": "GGS01_01 Methane",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200154198,
          55.839253508
        ]
      },
      "phenomenonTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "properties": {
        "sen_id": 896,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(103)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(103)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(103)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(103)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(103)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 1 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20024773442308,
            55.8394455662063
          ]
        },
        "@iot.id": 59,
        "name": "BGS Site 1 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927877,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(59)"
      }
    },
    {
      "description": "Carbon Dioxide from BGS Site 1 GasClam - Measured (%)",
      "@iot.id": 110,
      "name": "GGS01_01 Carbon Dioxide",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200154198,
          55.839253508
        ]
      },
      "phenomenonTime": "2021-09-01T11:09:00.000Z/2024-05-03T04:36:00.000Z",
      "properties": {
        "sen_id": 895,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2021-09-01T11:09:00.000Z/2024-05-03T04:36:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(110)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(110)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(110)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(110)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(110)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 1 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20024773442308,
            55.8394455662063
          ]
        },
        "@iot.id": 59,
        "name": "BGS Site 1 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927877,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(59)"
      }
    },
    {
      "description": "Oxygen from BGS Site 1 GasClam - Measured (%)",
      "@iot.id": 109,
      "name": "GGS01_01 Oxygen",
      "observationType": "OM_Measurement",
      "observedArea": {
        "type": "Point",
        "coordinates": [
          -4.200154198,
          55.839253508
        ]
      },
      "phenomenonTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "properties": {
        "sen_id": 897,
        "data_type": "Measured",
        "data_usage": "Available under the Open Government Licence subject to the following acknowledgement accompanying the reproduced UKRI materials \"Contains UKRI materials ©UKRI [year]\"",
        "publish_yn": "Y",
        "access_restriction": "Unrestricted"
      },
      "resultTime": "2021-09-01T11:09:00.000Z/2024-05-03T06:36:00.000Z",
      "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(109)",
      "unitOfMeasurement": {
        "name": "Percentage",
        "symbol": "%",
        "definition": "ucum:%"
      },
      "Sensor@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(109)/Sensor",
      "Observations@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(109)/Observations",
      "ObservedProperty@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(109)/ObservedProperty",
      "Thing@iot.navigationLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/Datastreams(109)/Thing",
      "FeatureOfInterest": {
        "description": "BGS Site 1 GasClam",
        "encodingType": "application/geo+json",
        "feature": {
          "type": "Point",
          "coordinates": [
            -4.20024773442308,
            55.8394455662063
          ]
        },
        "@iot.id": 59,
        "name": "BGS Site 1 GasClam",
        "properties": {
          "type": "SEN_LOC",
          "sen_id": 178927877,
          "active_yn": "Y",
          "from_date": "2021-09-01T00:00:00",
          "publish_yn": "Y"
        },
        "@iot.selfLink": "https://sensors.bgs.ac.uk/FROST-Server/v1.1/FeaturesOfInterest(59)"
      }
    }
  ]
} as DatastreamsByFeature;
