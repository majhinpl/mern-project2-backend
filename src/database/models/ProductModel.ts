import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
} from "sequelize-typescript";

@Table({
  tableName: "products",
  modelName: "Product",
})
class Product extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare productName: string;

  @Column({
    type: DataType.STRING,
  })
  declare decription: string;

  @Column({
    type: DataType.STRING,
  })
  declare price: string;

  @Column({
    type: DataType.STRING,
  })
  declare imgUrl: string;
}

export default Product;
