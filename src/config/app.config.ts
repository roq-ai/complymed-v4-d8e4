interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organisation Admin'],
  customerRoles: [],
  tenantRoles: ['Super Admin', 'Organisation Admin'],
  tenantName: 'Organization',
  applicationName: 'ComplyMed v4',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
