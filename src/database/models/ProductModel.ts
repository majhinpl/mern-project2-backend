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
    type: DataType.ENUM("customer", "admin"),
    defaultValue: "customer",
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
  })
  declare productName: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.DECIMAL(10, 2), // Adjust precision and scale as needed
  })
  declare price: number;

  @Column({
    type: DataType.STRING,
  })
  declare imgUrl: string;
}

export default Product;
