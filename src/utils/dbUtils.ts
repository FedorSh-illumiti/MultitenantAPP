import getConnection from "../db/config/config";

export const getSchemaName = (tenantId: string) => {
    const tenantSchema = tenantId.replace(/ /g, "").replace(/-/g, "");
    return `forecasting-${tenantSchema}`;
};

export const initDB = async (tenantId: string) => {
    const connection = await getConnection();
    await connection.createSchema(getSchemaName(tenantId), {});
};
