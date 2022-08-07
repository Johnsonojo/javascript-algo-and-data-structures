// parking lot problem
// implementation of a parking lot
class parkingLot {
  constructor(capacity) {
    this.capacity = capacity;
    this.slots = [];
    this.vehicles = [];
    this.slots.length = capacity;
    this.slots.fill(0);
  }
  park(vehicle) {
    if (this.slots.includes(0)) {
      let slot = this.slots.indexOf(0);
      this.slots[slot] = vehicle;
      this.vehicles.push(vehicle);
      return slot;
    }
    return -1;
  }
  leave(slot) {
    this.slots[slot] = 0;
    this.vehicles.splice(slot, 1);
  }
  status() {
    let status = {};
    status.slots = this.slots;
    status.vehicles = this.vehicles;
    return status;
  }
  getSlotNumber(registrationNumber) {
    return this.vehicles.indexOf(registrationNumber);
  }
  getSlotNumbers(registrationNumber) {
    let slotNumbers = [];
    for (let i = 0; i < this.vehicles.length; i++) {
      if (this.vehicles[i] === registrationNumber) {
        slotNumbers.push(i);
      }
    }
    return slotNumbers;
  }
  getRegistrationNumbers(slot) {
    return this.slots[slot];
  }
  getRegistrationNumbersForColor(color) {
    let registrationNumbers = [];
    for (let i = 0; i < this.vehicles.length; i++) {
      if (this.vehicles[i].color === color) {
        registrationNumbers.push(this.vehicles[i].registrationNumber);
      }
    }
    return registrationNumbers;
  }
  getSlotNumberForRegistrationNumber(registrationNumber) {
    return this.vehicles.indexOf(registrationNumber);
  }
}
