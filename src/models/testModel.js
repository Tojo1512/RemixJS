const { DataTypes, Model } = require('sequelize');
const { Column, Table } = require('../../framework/orm/decorators');

@Table({ tableName: 'test_models', timestamps: false })
class TestModel extends Model {
  @Column(DataTypes.STRING, { allowNull: false })
  nom;

  @Column(DataTypes.INTEGER, { allowNull: false })
  age;

  @Column(DataTypes.BOOLEAN, { allowNull: false })
  is_active;
}

module.exports = TestModel; 