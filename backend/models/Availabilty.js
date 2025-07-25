import mongoose from "mongoose";

const availabilitySlotSchema = new mongoose.Schema({
  day: {
    type: String,
    enum: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
  },
  startTime: String, // Format: "HH:MM"
  endTime: String, // Format: "HH:MM"
  available: Boolean,
});

const Availability = mongoose.model("Availability", availabilitySlotSchema);
export default Availability;
