import mongoose from 'mongoose';

const chargingStationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Charging station name is required'],
    trim: true,
  },
  location: {
    latitude: {
      type: Number,
      required: [true, 'Latitude is required'],
      min: -90,
      max: 90,
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude is required'],
      min: -180,
      max: 180,
    },
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  powerOutput: {
    type: Number,
    required: [true, 'Power output (kW) is required'],
    min: [0.1, 'Power output must be greater than 0'],
  },
  connectorType: {
    type: String,
    required: [true, 'Connector type is required'],
    enum: ['Type1', 'Type2', 'CCS', 'CHAdeMO'], // You can expand this list
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const ChargingStation = mongoose.model('ChargingStation', chargingStationSchema);
export default ChargingStation;
