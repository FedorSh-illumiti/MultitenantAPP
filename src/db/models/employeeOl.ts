import { Column, ForeignKey, Table, Model, DataType, IsUUID, PrimaryKey, Default } from 'sequelize-typescript';

class AttributedModel<T> extends Model<Omit<T, keyof Model>> {}

@Table({
    timestamps:false,
    paranoid: false,
    freezeTableName: true,
    tableName:'employee'
})
export class Employee extends Model{
  @Column({
    type:DataType.STRING,
    defaultValue:'1'
  })
  public id:string | undefined;
}

