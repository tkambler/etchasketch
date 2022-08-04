import * as queryString from 'query-string';

export function parseQueryParams(params?): Record<string, unknown> {
  return queryString.parse(params || location.search);
}

export function stringifyQueryParams(parsed): string {
  return queryString.stringify(parsed);
}
