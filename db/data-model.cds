namespace company1.forecasting;

type Title : String(30);

using {API_ENTERPRISE_PROJECT_SRV_0002 as projectsAPI} from '../src/external/service-specifications/srv/external/API_ENTERPRISE_PROJECT_SRV_0002';


@cds.persistence.skip
entity Books {
  key ID    : Integer;
      title : Title;
      stock : Integer;
}


type Booksa : {
  title : String;
  stock : Integer;
}

@cds.persistence.skip
entity Books2 {
  key ID2    : Integer;
      title2 : String;
      stock2 : Booksa;
}

entity Projects as projection on projectsAPI.A_EnterpriseProject {
  ProjectDescription as ProjectName,
  ProjectCurrency
};

entity UserDetails {
  email      : String;
  familyName : String;
  givenName  : String;
  logonName  : String;
  initials   : String;
}
