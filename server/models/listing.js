module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    booking_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Listing;
};
