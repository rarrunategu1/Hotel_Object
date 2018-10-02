var hotel = {
    occupiedRooms: 0, 
    Amenities: 'Pool',
    totalRooms: 25,
    availableRooms: function(){
        console.log("There are " + (this.totalRooms - this.occupiedRooms) + " rooms available."); 
    },
    bookRoom: function(){
        this.occupiedRooms++;
        this.totalRooms--;
        console.log("There are now " + this.totalRooms +" available and " + this.occupiedRooms + " occupied");
    },
    relinquishRoom: function(){
       this.occupiedRooms--;
       this.totalRooms++;
       console.log("There are now " + this.totalRooms +" available and " + this.occupiedRooms + " occupied");
    },

};

console.log(hotel.occupiedRooms);
console.log(hotel.totalRooms);
hotel.availableRooms();
hotel.bookRoom();
hotel.relinquishRoom();