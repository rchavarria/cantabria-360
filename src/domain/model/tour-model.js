export default class TourModel {
  constructor ({ id, description, rooms }) {
    this.id = id
    this.description = description
    this.rooms = rooms
  }

  startingRoom () {
    return this.rooms[0]
  }
}
