using company1.forecasting as my from '../db/data-model';

service CatalogService @(requires : 'authenticated-user') {
    @readonly
    entity Books       as projection on my.Books;

    @readonly
    entity Projects    as projection on my.Projects;

    @readonly
    entity UserDetails as projection on my.UserDetails;

}
