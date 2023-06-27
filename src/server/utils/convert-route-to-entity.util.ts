const mapping: Record<string, string> = {
  organizations: 'organization',
  'robux-requests': 'robux_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
