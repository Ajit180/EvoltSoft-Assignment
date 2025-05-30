import ChargingStation from '../schema/chargingStationSchema.js';

export const createStation = async (data) => {
  return await ChargingStation.create(data);
};

export const findStationByNameOrLocation = async (name, location) => {
  return await ChargingStation.findOne({
    $or: [
      { name: name },
      { location: location } // or more specific like location.coordinates if needed
    ]
  });
};


export const getAllStations = async () => {
  return await ChargingStation.find();
};

export const getStationById = async (id) => {
  return await ChargingStation.findById(id);
};

export const updateStationById = async (id, updateData) => {
  return await ChargingStation.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteStationById = async (id) => {
  return await ChargingStation.findByIdAndDelete(id);
};
