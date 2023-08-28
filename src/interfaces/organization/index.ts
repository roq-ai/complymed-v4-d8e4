import { ComplianceReportInterface } from 'interfaces/compliance-report';
import { DashboardInterface } from 'interfaces/dashboard';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  compliance_report?: ComplianceReportInterface[];
  dashboard?: DashboardInterface[];
  user?: UserInterface;
  _count?: {
    compliance_report?: number;
    dashboard?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
