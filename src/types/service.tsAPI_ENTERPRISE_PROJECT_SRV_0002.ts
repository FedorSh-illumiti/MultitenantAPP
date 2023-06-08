export interface IA_EnterpriseProjBlkFunc {
    ProjectUUID: string;
    Update_mc: boolean;
    EntProjTimeRecgIsBlkd: boolean;
    EntProjStaffExpensePostgIsBlkd: boolean;
    EntProjServicePostingIsBlkd: boolean;
    EntProjOtherExpensePostgIsBlkd: boolean;
    EntProjPurchasingIsBlkd: boolean;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EnterpriseProjectElement {
    ProjectElementUUID: string;
    ChangeEntProjElmntPosition_ac: boolean;
    ChangeEntProjElmntProcgStatus_ac: boolean;
    ActualEndDate_fc: number;
    ActualStartDate_fc: number;
    ControllingArea_fc: number;
    CostingSheet_fc: number;
    FactoryCalendar_fc: number;
    FunctionalArea_fc: number;
    FunctionalLocation_fc: number;
    Location_fc: number;
    PlannedEndDate_fc: number;
    PlannedStartDate_fc: number;
    Plant_fc: number;
    ProfitCenter_fc: number;
    ProjectElement_fc: number;
    ProjectElementDescription_fc: number;
    ResponsibleCostCenter_fc: number;
    TaxJurisdiction_fc: number;
    WBSElementIsBillingElement_fc: number;
    Delete_mc: boolean;
    Update_mc: boolean;
    to_EntProjElmntBlkFunc_oc: boolean;
    to_EntProjElmntDlvbrl_oc: boolean;
    to_EntProjElmntWorkItem_oc: boolean;
    to_SubProjElement_oc: boolean;
    ProjectElement: string;
    WBSElementInternalID: string;
    ProjectUUID: string;
    ProjectElementDescription: string;
    ParentObjectUUID: string;
    ProjectElementOrdinalNumber: number;
    ProcessingStatus: string;
    EntProjectElementType: string;
    PlannedStartDate: Date;
    PlannedEndDate: Date;
    ActualStartDate: Date;
    ActualEndDate: Date;
    ResponsibleCostCenter: string;
    CompanyCode: string;
    ProfitCenter: string;
    FunctionalArea: string;
    ControllingArea: string;
    Plant: string;
    Location: string;
    TaxJurisdiction: string;
    FunctionalLocation: string;
    FactoryCalendar: string;
    CostingSheet: string;
    InvestmentProfile: string;
    WBSIsStatisticalWBSElement: boolean;
    CostCenter: string;
    WBSElementIsBillingElement: boolean;
    CreatedByUser: string;
    CreationDateTime: Date;
    LastChangeDateTime: Date;
    LastChangedByUser: string;
    to_EntProjectElementJVA: IA_EntProjectElementJVA;
    to_EntProjectElmntPublicSector: IA_EntProjectElmntPublicSector;
    to_EntProjElmntBlkFunc: IA_EntProjElmntBlockFunc;
    to_EntProjElmntDlvbrl: IA_EntProjElmntDlvbrl[];
    to_EntProjElmntWorkItem: IA_EntProjElmntWorkItem[];
    to_ParentProjElement?: IA_EnterpriseProjectElement;
    to_SubProjElement?: IA_EnterpriseProjectElement[];
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export enum ActionChangeEntProjElmntPosition {
    name = "ChangeEntProjElmntPosition",
    paramParentObjectUUID = "ParentObjectUUID",
    paramLeftSiblingUUID = "LeftSiblingUUID"
}

export interface IActionChangeEntProjElmntPositionParams {
    ParentObjectUUID: string;
    LeftSiblingUUID: string;
}

export type ActionChangeEntProjElmntPositionReturn = IA_EnterpriseProjectElement;

export enum ActionChangeEntProjElmntProcgStatus {
    name = "ChangeEntProjElmntProcgStatus",
    paramProcessingStatus = "ProcessingStatus"
}

export interface IActionChangeEntProjElmntProcgStatusParams {
    ProcessingStatus: string;
}

export type ActionChangeEntProjElmntProcgStatusReturn = IA_EnterpriseProjectElement;

export interface IA_EnterpriseProjectJVA {
    ProjectUUID: string;
    Update_mc: boolean;
    JointVenture: string;
    JointVentureCostRecoveryCode: string;
    JointVentureEquityType: string;
    JntVntrProjectType: string;
    JntIntrstBillgClass: string;
    JntIntrstBillgSubClass: string;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EnterpriseProjectRole {
    ProjectRoleUUID: string;
    ProjectUUID: string;
    ProjectRoleType: string;
    ProjectRoleCategory: string;
    ProjectRoleName: string;
    CreatedByUser: string;
    CreationDateTime: Date;
    LastChangedByUser: string;
    LastChangeDateTime: Date;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EnterpriseProjectTeamMember {
    TeamMemberUUID: string;
    to_EntProjEntitlement_oc: boolean;
    BusinessPartnerUUID: string;
    ProjectUUID: string;
    CreatedByUser: string;
    CreationDateTime: Date;
    LastChangedByUser: string;
    LastChangeDateTime: Date;
    to_EntProjEntitlement: IA_EntTeamMemberEntitlement[];
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EnterpriseProject {
    ProjectUUID: string;
    ChangeEntProjProcgStatus_ac: boolean;
    ActualEndDate_fc: number;
    ActualStartDate_fc: number;
    AvailabilityControlIsActive_fc: number;
    AvailabilityControlProfile_fc: number;
    ControllingArea_fc: number;
    CostingSheet_fc: number;
    EnterpriseProjectType_fc: number;
    EntProjIsMultiSlsOrdItmsEnbld_fc: number;
    FunctionalArea_fc: number;
    FunctionalLocation_fc: number;
    InvestmentProfile_fc: number;
    IsBillingRelevant_fc: number;
    Location_fc: number;
    Plant_fc: number;
    PriorityCode_fc: number;
    ProfitCenter_fc: number;
    Project_fc: number;
    ProjectCurrency_fc: number;
    ProjectDescription_fc: number;
    ProjectEndDate_fc: number;
    ProjectProfileCode_fc: number;
    ProjectStartDate_fc: number;
    ResponsibleCostCenter_fc: number;
    Delete_mc: boolean;
    Update_mc: boolean;
    to_EnterpriseProjectElement_oc: boolean;
    to_EntProjBlkFunc_oc: boolean;
    to_EntProjRole_oc: boolean;
    to_EntProjTeamMember_oc: boolean;
    ProjectInternalID: string;
    Project: string;
    ProjectDescription: string;
    EnterpriseProjectType: string;
    PriorityCode: string;
    ProjectStartDate: Date;
    ProjectEndDate: Date;
    ActualStartDate: Date;
    ActualEndDate: Date;
    CustomerUUID: string;
    EnterpriseProjectServiceOrg: string;
    EntProjectIsConfidential: boolean;
    RestrictedTimePosting: string;
    ProcessingStatus: string;
    ResponsibleCostCenter: string;
    ProfitCenter: string;
    ProjectProfileCode: string;
    FunctionalArea: string;
    CompanyCode: string;
    ControllingArea: string;
    Plant: string;
    Location: string;
    TaxJurisdiction: string;
    ProjectCurrency: string;
    AvailabilityControlProfile: string;
    AvailabilityControlIsActive: boolean;
    FunctionalLocation: string;
    IsBillingRelevant: boolean;
    InvestmentProfile: string;
    LastChangeDateTime: Date;
    ProjectLastChangedDateTime: Date;
    LastChangedByUser: string;
    EntProjIsMultiSlsOrdItmsEnbld: boolean;
    CostingSheet: string;
    to_EnterpriseProjectElement: IA_EnterpriseProjectElement[];
    to_EnterpriseProjectJVA: IA_EnterpriseProjectJVA;
    to_EntProjBlkFunc: IA_EnterpriseProjBlkFunc;
    to_EntProjectPublicSector: IA_EntProjectPublicSector;
    to_EntProjRole: IA_EnterpriseProjectRole[];
    to_EntProjTeamMember: IA_EnterpriseProjectTeamMember[];
}

export enum ActionChangeEntProjProcgStatus {
    name = "ChangeEntProjProcgStatus",
    paramProcessingStatus = "ProcessingStatus"
}

export interface IActionChangeEntProjProcgStatusParams {
    ProcessingStatus: string;
}

export type ActionChangeEntProjProcgStatusReturn = IA_EnterpriseProject;

export interface IA_EntProjectElementJVA {
    ProjectElementUUID: string;
    JntIntrstBillgClass_fc: number;
    JntIntrstBillgSubClass_fc: number;
    JntVntrProjectType_fc: number;
    JointVenture_fc: number;
    JointVentureCostRecoveryCode_fc: number;
    JointVentureEquityType_fc: number;
    Update_mc: boolean;
    ProjectUUID: string;
    JointVenture: string;
    JointVentureCostRecoveryCode: string;
    JointVentureEquityType: string;
    JntVntrProjectType: string;
    JntIntrstBillgClass: string;
    JntIntrstBillgSubClass: string;
    to_EnterpriseProjectElement?: IA_EnterpriseProjectElement;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EntProjectPublicSector {
    ProjectUUID: string;
    Update_mc: boolean;
    Fund: string;
    FundIsFixAssigned: boolean;
    FunctionalAreaIsFixAssigned: boolean;
    GrantID: string;
    GrantIsFixAssigned: boolean;
    SponsoredProgram: string;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EntProjElmntBlockFunc {
    ProjectElementUUID: string;
    EntProjOtherExpensePostgIsBlkd_fc: number;
    EntProjPurchasingIsBlkd_fc: number;
    EntProjServicePostingIsBlkd_fc: number;
    EntProjStaffExpensePostgIsBlkd_fc: number;
    EntProjTimeRecgIsBlkd_fc: number;
    Update_mc: boolean;
    ProjectUUID: string;
    EntProjTimeRecgIsBlkd: boolean;
    EntProjStaffExpensePostgIsBlkd: boolean;
    EntProjServicePostingIsBlkd: boolean;
    EntProjOtherExpensePostgIsBlkd: boolean;
    EntProjPurchasingIsBlkd: boolean;
    to_EnterpriseProjectElement?: IA_EnterpriseProjectElement;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EntProjElmntDlvbrl {
    EntProjElmntDeliverableUUID: string;
    Update_mc: boolean;
    to_EntProjElmntDlvDistr_oc: boolean;
    ProjectElementUUID: string;
    ProjectUUID: string;
    EntProjElmntDeliverableType: string;
    EntProjElmntDlvbrlQuantity: number;
    EntProjElmntDlvbrlQuantityUnit: string;
    CreatedByUser: string;
    CreationDateTime: Date;
    LastChangeDateTime: Date;
    LastChangedByUser: string;
    to_EnterpriseProjectElement?: IA_EnterpriseProjectElement;
    to_EntProjElmntDlvDistr: IA_EntProjElmntDlvbrlDistr[];
}

export interface IA_EntProjElmntDlvbrlDistr {
    EntProjElmntDlvbrlDistrUUID: string;
    Update_mc: boolean;
    EntProjElmntDeliverableUUID: string;
    ProjectElementUUID: string;
    ProjectUUID: string;
    EntProjElmntDlvbrlDistrYearVal: string;
    EntProjElmntDlvbrlDistrPerdVal: string;
    EntProjElmntDlvbrlDistrQty: number;
    EntProjElmntDlvbrlDistrQtyUnit: string;
    to_EntProjElmntDlvbrl?: IA_EntProjElmntDlvbrl;
}

export interface IA_EntProjectElmntPublicSector {
    ProjectElementUUID: string;
    FunctionalAreaIsFixAssigned_fc: number;
    Fund_fc: number;
    FundIsFixAssigned_fc: number;
    GrantID_fc: number;
    GrantIsFixAssigned_fc: number;
    SponsoredProgram_fc: number;
    Update_mc: boolean;
    ProjectUUID: string;
    Fund: string;
    FundIsFixAssigned: boolean;
    FunctionalAreaIsFixAssigned: boolean;
    GrantID: string;
    GrantIsFixAssigned: boolean;
    SponsoredProgram: string;
    to_EnterpriseProjectElement?: IA_EnterpriseProjectElement;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EntProjElmntWorkItem {
    EntProjElmntWorkItemUUID: string;
    Delete_mc: boolean;
    Update_mc: boolean;
    EntProjElmntWorkItem: string;
    EntProjElmntWorkItemName: string;
    EntProjElmntWorkItemIsInactive: boolean;
    EntProjElmntWorkItemIsCnfgrd: boolean;
    ProjectUUID: string;
    ProjectElementUUID: string;
    EntProjElmntWrkItmLastUpdtSrce: string;
    EntProjElmntWrkItmCrtedByUsr: string;
    EntProjElmntWrkItmCrtnDteTme: Date;
    EntProjElmntWrkItmLstChgByUsr: string;
    EntProjElmntWrkItmLstChgDteTme: Date;
    to_EnterpriseProjectElement?: IA_EnterpriseProjectElement;
    to_EnterpriseProject?: IA_EnterpriseProject;
}

export interface IA_EntTeamMemberEntitlement {
    ProjectEntitlementUUID: string;
    Delete_mc: boolean;
    Update_mc: boolean;
    ProjectUUID: string;
    ProjectRoleUUID: string;
    TeamMemberUUID: string;
    ProjectRoleType: string;
    CreatedByUser: string;
    CreationDateTime: Date;
    LastChangedByUser: string;
    LastChangeDateTime: Date;
    to_TeamMember?: IA_EnterpriseProjectTeamMember;
    to_EnterpriseProject?: IA_EnterpriseProject;
    to_Role?: IA_EnterpriseProjectRole;
}

export enum Entity {
    A_EnterpriseProjBlkFunc = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProjBlkFunc",
    A_EnterpriseProjectElement = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProjectElement",
    A_EnterpriseProjectJVA = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProjectJVA",
    A_EnterpriseProjectRole = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProjectRole",
    A_EnterpriseProjectTeamMember = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProjectTeamMember",
    A_EnterpriseProject = "API_ENTERPRISE_PROJECT_SRV_0002.A_EnterpriseProject",
    A_EntProjectElementJVA = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjectElementJVA",
    A_EntProjectPublicSector = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjectPublicSector",
    A_EntProjElmntBlockFunc = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjElmntBlockFunc",
    A_EntProjElmntDlvbrl = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjElmntDlvbrl",
    A_EntProjElmntDlvbrlDistr = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjElmntDlvbrlDistr",
    A_EntProjectElmntPublicSector = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjectElmntPublicSector",
    A_EntProjElmntWorkItem = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntProjElmntWorkItem",
    A_EntTeamMemberEntitlement = "API_ENTERPRISE_PROJECT_SRV_0002.A_EntTeamMemberEntitlement"
}

export enum SanitizedEntity {
    A_EnterpriseProjBlkFunc = "A_EnterpriseProjBlkFunc",
    A_EnterpriseProjectElement = "A_EnterpriseProjectElement",
    A_EnterpriseProjectJVA = "A_EnterpriseProjectJVA",
    A_EnterpriseProjectRole = "A_EnterpriseProjectRole",
    A_EnterpriseProjectTeamMember = "A_EnterpriseProjectTeamMember",
    A_EnterpriseProject = "A_EnterpriseProject",
    A_EntProjectElementJVA = "A_EntProjectElementJVA",
    A_EntProjectPublicSector = "A_EntProjectPublicSector",
    A_EntProjElmntBlockFunc = "A_EntProjElmntBlockFunc",
    A_EntProjElmntDlvbrl = "A_EntProjElmntDlvbrl",
    A_EntProjElmntDlvbrlDistr = "A_EntProjElmntDlvbrlDistr",
    A_EntProjectElmntPublicSector = "A_EntProjectElmntPublicSector",
    A_EntProjElmntWorkItem = "A_EntProjElmntWorkItem",
    A_EntTeamMemberEntitlement = "A_EntTeamMemberEntitlement"
}
