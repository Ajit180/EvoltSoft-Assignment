import {
  createStation,
  deleteStationById,
  findStationByNameOrLocation,
  getAllStations,
  getStationById,
  updateStationById,
} from "../repository/chargingStationRepository.js";

export const addChargingStation = async (stationData) => {
    const existingStation = await findStationByNameOrLocation(stationData.name, stationData.location);

  if (existingStation) {
    throw new Error("Charging station already exists with this name or location.");
  }
  const station = await createStation(stationData);
  return station;
};

export const fetchAllStations = async () => {
  return await getAllStations();
};

export const fetchStationById = async (id) => {
  return await getStationById(id);
};

export const editStationById = async (id, updateData) => {
  return await updateStationById(id, updateData);
};

export const removeStationById = async (id) => {
  return await deleteStationById(id);
};
