const mapping: Record<string, string> = {
  'compliance-reports': 'compliance_report',
  dashboards: 'dashboard',
  messages: 'message',
  organizations: 'organization',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
