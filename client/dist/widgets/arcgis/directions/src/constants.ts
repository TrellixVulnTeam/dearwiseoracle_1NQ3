import { EsriFieldType, FieldSchema, JimuFieldType } from 'jimu-core'

export const DEFAULT_ROUTE_URL = 'https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World'
export const MAX_SUGGESTIONS = 6

/**
 * `locationEnabled` isn't defined in __esri.DirectionsSearchProperties, but works.
 */
export const DefaultJSAPISearchProperties: __esri.DirectionsSearchProperties & { locationEnabled?: boolean } = {
  includeDefaultSources: false,
  locationEnabled: false,
  maxSuggestions: MAX_SUGGESTIONS
}

export const OBJECTID_FIELD_NAME = 'ObjectID'

// #region output data source fields schema
/**
 * See
 *  1. https://developers.arcgis.com/rest/network/api-reference/route-synchronous-service.htm, `Output parameters` part, and,
 *  2. https://pro.arcgis.com/en/pro-app/2.8/arcpy/network-analyst/route-output-data-types.htm
 */

export const StopFieldsSchema: { [jimuName: string]: FieldSchema } = {
  [OBJECTID_FIELD_NAME]: {
    jimuName: OBJECTID_FIELD_NAME,
    name: OBJECTID_FIELD_NAME,
    type: JimuFieldType.Number,
    esriType: EsriFieldType.OID
  },
  Name: {
    jimuName: 'Name',
    name: 'Name',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  RouteName: {
    jimuName: 'RouteName',
    name: 'RouteName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  Sequence: {
    jimuName: 'Sequence',
    name: 'Sequence',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  TimeWindowStart: {
    jimuName: 'TimeWindowStart',
    name: 'TimeWindowStart',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  TimeWindowEnd: {
    jimuName: 'TimeWindowEnd',
    name: 'TimeWindowEnd',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  ArriveCurbApproach: {
    jimuName: 'ArriveCurbApproach',
    name: 'ArriveCurbApproach',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  DepartCurbApproach: {
    jimuName: 'DepartCurbApproach',
    name: 'DepartCurbApproach',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  ArriveTime: {
    jimuName: 'ArriveTime',
    name: 'ArriveTime',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  DepartTime: {
    jimuName: 'DepartTime',
    name: 'DepartTime',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  ArriveTimeUTC: {
    jimuName: 'ArriveTimeUTC',
    name: 'ArriveTimeUTC',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  DepartTimeUTC: {
    jimuName: 'DepartTimeUTC',
    name: 'DepartTimeUTC',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  LocationType: {
    jimuName: 'LocationType',
    name: 'LocationType',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  SourceID: {
    jimuName: 'SourceID',
    name: 'SourceID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  SourceOID: {
    jimuName: 'SourceOID',
    name: 'SourceOID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  PosAlong: {
    jimuName: 'PosAlong',
    name: 'PosAlong',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  SideOfEdge: {
    jimuName: 'SideOfEdge',
    name: 'SideOfEdge',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  CurbApproach: {
    jimuName: 'CurbApproach',
    name: 'CurbApproach',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  Status: {
    jimuName: 'Status',
    name: 'Status',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  SnapX: {
    jimuName: 'SnapX',
    name: 'SnapX',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  SnapY: {
    jimuName: 'SnapY',
    name: 'SnapY',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  SnapZ: {
    jimuName: 'SnapZ',
    name: 'SnapZ',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  DistanceToNetworkInMeters: {
    jimuName: 'DistanceToNetworkInMeters',
    name: 'DistanceToNetworkInMeters',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  AdditionalTime: {
    jimuName: 'AdditionalTime',
    name: 'AdditionalTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  AdditionalDistance: {
    jimuName: 'AdditionalDistance',
    name: 'AdditionalDistance',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  AdditionalCost: {
    jimuName: 'AdditionalCost',
    name: 'AdditionalCost',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_Minutes: {
    jimuName: 'Cumul_Minutes',
    name: 'Cumul_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_Miles: {
    jimuName: 'Cumul_Miles',
    name: 'Cumul_Miles',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_Kilometers: {
    jimuName: 'Cumul_Kilometers',
    name: 'Cumul_Kilometers',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_Cost: {
    jimuName: 'Cumul_Cost',
    name: 'Cumul_Cost',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_Minutes: {
    jimuName: 'Wait_Minutes',
    name: 'Wait_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_Minutes: {
    jimuName: 'CumulWait_Minutes',
    name: 'CumulWait_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_Minutes: {
    jimuName: 'Violation_Minutes',
    name: 'Violation_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_Minutes: {
    jimuName: 'CumulViolation_Minutes',
    name: 'CumulViolation_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  ORIG_FID: {
    jimuName: 'ORIG_FID',
    name: 'ORIG_FID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  Bearing: {
    jimuName: 'Bearing',
    name: 'Bearing',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  BearingTol: {
    jimuName: 'BearingTol',
    name: 'BearingTol',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  NavLatency: {
    jimuName: 'NavLatency',
    name: 'NavLatency',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_Kilometers: {
    jimuName: 'Attr_Kilometers',
    name: 'Attr_Kilometers',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_Miles: {
    jimuName: 'Attr_Miles',
    name: 'Attr_Miles',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_Minutes: {
    jimuName: 'Attr_Minutes',
    name: 'Attr_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_TimeAt1KPH: {
    jimuName: 'Attr_TimeAt1KPH',
    name: 'Attr_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_TravelTime: {
    jimuName: 'Attr_TravelTime',
    name: 'Attr_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_TruckMinutes: {
    jimuName: 'Attr_TruckMinutes',
    name: 'Attr_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_TruckTravelTime: {
    jimuName: 'Attr_TruckTravelTime',
    name: 'Attr_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Attr_WalkTime: {
    jimuName: 'Attr_WalkTime',
    name: 'Attr_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_TimeAt1KPH: {
    jimuName: 'Cumul_TimeAt1KPH',
    name: 'Cumul_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_TravelTime: {
    jimuName: 'Cumul_TravelTime',
    name: 'Cumul_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_TruckMinutes: {
    jimuName: 'Cumul_TruckMinutes',
    name: 'Cumul_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_TruckTravelTime: {
    jimuName: 'Cumul_TruckTravelTime',
    name: 'Cumul_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Cumul_WalkTime: {
    jimuName: 'Cumul_WalkTime',
    name: 'Cumul_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_TimeAt1KPH: {
    jimuName: 'Wait_TimeAt1KPH',
    name: 'Wait_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_TravelTime: {
    jimuName: 'Wait_TravelTime',
    name: 'Wait_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_TruckMinutes: {
    jimuName: 'Wait_TruckMinutes',
    name: 'Wait_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_TruckTravelTime: {
    jimuName: 'Wait_TruckTravelTime',
    name: 'Wait_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Wait_WalkTime: {
    jimuName: 'Wait_WalkTime',
    name: 'Wait_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_TimeAt1KPH: {
    jimuName: 'CumulWait_TimeAt1KPH',
    name: 'CumulWait_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_TravelTime: {
    jimuName: 'CumulWait_TravelTime',
    name: 'CumulWait_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_TruckMinutes: {
    jimuName: 'CumulWait_TruckMinutes',
    name: 'CumulWait_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_TruckTravelTime: {
    jimuName: 'CumulWait_TruckTravelTime',
    name: 'CumulWait_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulWait_WalkTime: {
    jimuName: 'CumulWait_WalkTime',
    name: 'CumulWait_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_TimeAt1KPH: {
    jimuName: 'Violation_TimeAt1KPH',
    name: 'Violation_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_TravelTime: {
    jimuName: 'Violation_TravelTime',
    name: 'Violation_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_TruckMinutes: {
    jimuName: 'Violation_TruckMinutes',
    name: 'Violation_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_TruckTravelTime: {
    jimuName: 'Violation_TruckTravelTime',
    name: 'Violation_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Violation_WalkTime: {
    jimuName: 'Violation_WalkTime',
    name: 'Violation_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_TimeAt1KPH: {
    jimuName: 'CumulViolation_TimeAt1KPH',
    name: 'CumulViolation_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_TravelTime: {
    jimuName: 'CumulViolation_TravelTime',
    name: 'CumulViolation_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_TruckMinutes: {
    jimuName: 'CumulViolation_TruckMinutes',
    name: 'CumulViolation_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_TruckTravelTime: {
    jimuName: 'CumulViolation_TruckTravelTime',
    name: 'CumulViolation_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  CumulViolation_WalkTime: {
    jimuName: 'CumulViolation_WalkTime',
    name: 'CumulViolation_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  }
}

export const RouteFieldsSchema: { [jimuName: string]: FieldSchema } = {
  [OBJECTID_FIELD_NAME]: {
    jimuName: OBJECTID_FIELD_NAME,
    name: OBJECTID_FIELD_NAME,
    type: JimuFieldType.Number,
    esriType: EsriFieldType.OID
  },
  Name: {
    jimuName: 'Name',
    name: 'Name',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  RouteName: {
    jimuName: 'RouteName',
    name: 'RouteName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  StopCount: {
    jimuName: 'StopCount',
    name: 'StopCount',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  StartTime: {
    jimuName: 'StartTime',
    name: 'StartTime',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  EndTime: {
    jimuName: 'EndTime',
    name: 'EndTime',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  StartTimeUTC: {
    jimuName: 'StartTimeUTC',
    name: 'StartTimeUTC',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  EndTimeUTC: {
    jimuName: 'EndTimeUTC',
    name: 'EndTimeUTC',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  Total_Minutes: {
    jimuName: 'Total_Minutes',
    name: 'Total_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_Miles: {
    jimuName: 'Total_Miles',
    name: 'Total_Miles',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_Kilometers: {
    jimuName: 'Total_Kilometers',
    name: 'Total_Kilometers',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_Other: {
    jimuName: 'Total_Other',
    name: 'Total_Other',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_Minutes: {
    jimuName: 'TotalWait_Minutes',
    name: 'TotalWait_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_Minutes: {
    jimuName: 'TotalViolation_Minutes',
    name: 'TotalViolation_Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  FirstStopOID: {
    jimuName: 'FirstStopOID',
    name: 'FirstStopOID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  LastStopOID: {
    jimuName: 'LastStopOID',
    name: 'LastStopOID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  Total_TimeAt1KPH: {
    jimuName: 'Total_TimeAt1KPH',
    name: 'Total_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_TravelTime: {
    jimuName: 'Total_TravelTime',
    name: 'Total_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_TruckMinutes: {
    jimuName: 'Total_TruckMinutes',
    name: 'Total_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_TruckTravelTime: {
    jimuName: 'Total_TruckTravelTime',
    name: 'Total_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Total_WalkTime: {
    jimuName: 'Total_WalkTime',
    name: 'Total_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_TimeAt1KPH: {
    jimuName: 'TotalWait_TimeAt1KPH',
    name: 'TotalWait_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_TravelTime: {
    jimuName: 'TotalWait_TravelTime',
    name: 'TotalWait_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_TruckMinutes: {
    jimuName: 'TotalWait_TruckMinutes',
    name: 'TotalWait_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_TruckTravelTime: {
    jimuName: 'TotalWait_TruckTravelTime',
    name: 'TotalWait_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalWait_WalkTime: {
    jimuName: 'TotalWait_WalkTime',
    name: 'TotalWait_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_TimeAt1KPH: {
    jimuName: 'TotalViolation_TimeAt1KPH',
    name: 'TotalViolation_TimeAt1KPH',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_TravelTime: {
    jimuName: 'TotalViolation_TravelTime',
    name: 'TotalViolation_TravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_TruckMinutes: {
    jimuName: 'TotalViolation_TruckMinutes',
    name: 'TotalViolation_TruckMinutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_TruckTravelTime: {
    jimuName: 'TotalViolation_TruckTravelTime',
    name: 'TotalViolation_TruckTravelTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  TotalViolation_WalkTime: {
    jimuName: 'TotalViolation_WalkTime',
    name: 'TotalViolation_WalkTime',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  }
}

export const DirectionPointFieldsSchema: { [jimuName: string]: FieldSchema } = {
  [OBJECTID_FIELD_NAME]: {
    jimuName: OBJECTID_FIELD_NAME,
    name: OBJECTID_FIELD_NAME,
    type: JimuFieldType.Number,
    esriType: EsriFieldType.OID
  },
  RouteID: {
    jimuName: 'RouteID',
    name: 'RouteID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  Sequence: {
    jimuName: 'Sequence',
    name: 'Sequence',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  DirectionPointType: {
    jimuName: 'DirectionPointType',
    name: 'DirectionPointType',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  StopID: {
    jimuName: 'StopID',
    name: 'StopID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  DisplayText: {
    jimuName: 'DisplayText',
    name: 'DisplayText',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  ArrivalTime: {
    jimuName: 'ArrivalTime',
    name: 'ArrivalTime',
    type: JimuFieldType.Date,
    esriType: EsriFieldType.Date
  },
  ArrivalUTCOffset: {
    jimuName: 'ArrivalUTCOffset',
    name: 'ArrivalUTCOffset',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Name: {
    jimuName: 'Name',
    name: 'Name',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  ExitName: {
    jimuName: 'ExitName',
    name: 'ExitName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  AlternateName: {
    jimuName: 'AlternateName',
    name: 'AlternateName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  IntersectingName: {
    jimuName: 'IntersectingName',
    name: 'IntersectingName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  BranchName: {
    jimuName: 'BranchName',
    name: 'BranchName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  TowardName: {
    jimuName: 'TowardName',
    name: 'TowardName',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  Level: {
    jimuName: 'Level',
    name: 'Level',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  ShortVoiceInstruction: {
    jimuName: 'ShortVoiceInstruction',
    name: 'ShortVoiceInstruction',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  VoiceInstruction: {
    jimuName: 'VoiceInstruction',
    name: 'VoiceInstruction',
    type: JimuFieldType.String,
    esriType: EsriFieldType.String
  },
  Azimuth: {
    jimuName: 'Azimuth',
    name: 'Azimuth',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  }
}

export const DirectionLineFieldsSchema: { [jimuName: string]: FieldSchema } = {
  [OBJECTID_FIELD_NAME]: {
    jimuName: OBJECTID_FIELD_NAME,
    name: OBJECTID_FIELD_NAME,
    type: JimuFieldType.Number,
    esriType: EsriFieldType.OID
  },
  DirectionPointID: {
    jimuName: 'DirectionPointID',
    name: 'DirectionPointID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  RouteID: {
    jimuName: 'RouteID',
    name: 'RouteID',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  DirectionLineType: {
    jimuName: 'DirectionLineType',
    name: 'DirectionLineType',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  Meters: {
    jimuName: 'Meters',
    name: 'Meters',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  Minutes: {
    jimuName: 'Minutes',
    name: 'Minutes',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Double
  },
  FromLevel: {
    jimuName: 'FromLevel',
    name: 'FromLevel',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  },
  ToLevel: {
    jimuName: 'ToLevel',
    name: 'ToLevel',
    type: JimuFieldType.Number,
    esriType: EsriFieldType.Integer
  }
}

// #endregion output data source fields schema
