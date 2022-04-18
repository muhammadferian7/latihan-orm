'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.category)
    }
  }
  product.init({
    name: {
      type: DataTypes.STRING,

    },
    quantity: {
      type: DataTypes.INTEGER,

    },
    price: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,

    },
    image: {
      type: DataTypes.STRING
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    tableName: 'products',
    timestamps: true
  });
  return product;
};