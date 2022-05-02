import { SearchGeocodeDataConfig, SearchSuggestionConfig } from 'jimu-ui/advanced/setting-components'
import { ImmutableObject } from 'seamless-immutable'

export interface config {
  routeConfig?: RouteConfig
  searchConfig?: SearchConfig
}
export type IMConfig = ImmutableObject<config>

export interface RouteConfig {
  routeServiceUrl?: string
}
export type IMRouteConfig = ImmutableObject<RouteConfig>

export interface SearchConfig {
  dataConfig?: SearchGeocodeDataConfig[]
  generalConfig?: SearchGeneralConfig
  suggestionConfig?: SearchSuggestionConfig
}
export type IMSearchConfig = ImmutableObject<SearchConfig>

interface SearchGeneralConfig {
  hint: string
}
