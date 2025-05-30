import { addChargingStation, editStationById, fetchAllStations, fetchStationById, removeStationById } from "../service/chargingStationService.js";

export const createStationController = async (req, res) => {
  try {
    const stationData = {
      ...req.body,
      createdBy: req.user._id,
    };
    console.log(stationData);
    const station = await addChargingStation(stationData);
    res.status(201).json({ success: true, data: station });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStationsController = async (req, res) => {
  try {
    const stations = await fetchAllStations();
    res.status(200).json({ success: true, data: stations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getStationController = async (req, res) => {
  try {
    const station = await fetchStationById(req.params.id);
    if (!station) {
      return res.status(404).json({ success: false, message: 'Station not found' });
    }
    res.status(200).json({ success: true, data: station });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateStationController = async (req, res) => {
  try {
    const updated = await editStationById(req.params.id, req.body);
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteStationController = async (req, res) => {
  try {
    const deleted = await removeStationById(req.params.id);
    res.status(200).json({ success: true, message: 'Station deleted', data: deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
