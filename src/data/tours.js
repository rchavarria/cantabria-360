import GateModel from '../model/gate-model'
import { Vector3 } from 'three'
import RoomModel from '../model/room-model'
import TourModel from '../model/tour-model'

const bedroomGate = new GateModel({
  id: 'from-entrance-to-bedroom',
  label: 'Habitación',
  position: new Vector3(175, 0, -300),
  goesTo: 'bedroom'
})

const kitchenGate = new GateModel({
  id: 'from-entrance-to-kitchen',
  label: 'Cocina',
  position: new Vector3(300, 0, 0),
  goesTo: 'kitchen'
})

const bathroomGate = new GateModel({
  id: 'from-entrance-to-bathroom',
  label: 'Baño',
  position: new Vector3(300, 0, -200),
  goesTo: 'bathroom'
})

const entranceRoom = new RoomModel({
  id: 'entrance',
  panorama: 'assets/images/entrance.jpg',
  gates: [
    bedroomGate,
    kitchenGate,
    bathroomGate
  ]
})

const bedroomRoom = new RoomModel({
  id: 'bedroom',
  panorama: 'assets/images/bedroom.jpg',
  gates: []
})

const kitchenRoom = new RoomModel({
  id: 'kitchen',
  panorama: 'assets/images/kitchen.jpg',
  gates: []
})

const bathroomRoom = new RoomModel({
  id: 'bathroom',
  panorama: 'assets/images/bathroom.jpg',
  gates: []
})

const firstTour = new TourModel({
  id: 'first-tour',
  rooms: [
    entranceRoom,
    bedroomRoom,
    kitchenRoom,
    bathroomRoom
  ]
})

export { firstTour, entranceRoom }