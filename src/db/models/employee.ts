import { DataTypes, Model, ModelStatic, Optional, UUIDV4 } from "sequelize";
import getConnection from "../config/config";
import { getSchemaName } from "src/utils/dbUtils";

interface EmployeeAttributes {
    id: string;
    employeename?: string;
    employeeid?: string;
}

export interface EmployeeInput extends Optional<EmployeeAttributes, "id"> {}

export interface EmployeeOuput extends Required<EmployeeAttributes> {}

class Employee extends Model<EmployeeAttributes, EmployeeInput> implements EmployeeInput {
    public id!: string;
    public employeename!: string;
    public employeeid!: string;
}
export const getModel = async (tenantID?: string): Promise<typeof Employee> => {
    const connection = await getConnection(tenantID);
    Employee.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                primaryKey: true
            },
            employeename: {
                type: DataTypes.STRING
            },
            employeeid: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize: connection,
            paranoid: false,
            freezeTableName: true
        }
    );
    await Employee.sync();
    return Employee;
};

