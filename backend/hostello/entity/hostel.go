package entity

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	FistName string `json:"firstName"`
	LastName string `json:"lastName"`
	Email    string `json:"email"`
	Age      int    `json:"age"`
}

type Hostel struct {
	Id               primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	HostelName       string             `json:"hostelName"`
	OwnerName        string             `json:"ownerName"`
	Address1         string             `json:"address1"`
	Address2         string             `json:"address2"`
	State            string             `json:"state"`
	CoverImgURL      string             `json:"coverimg"`
	City             string             `json:"city"`
	Description      string             `json:"description"`
	Amenities        string             `json:"amenities"`
	Type             string             `json:"type"`
	VideoLink        string             `json:"videoLink"`
	RoomPhoto        string             `json:"roomPhoto"`
	Bathroom         string             `json:"bathroomPhoto"`
	Reception        string             `json:"ReceptionPhoto"`
	Kitchen          string             `json:"kitchen"`
	GmapLink         string             `json:"gmap"`
	NumberOfRooms    int                `json:"numberofrooms"`
	OccupancyPerRoom int                `json:"occupancyperroom"`
	Price            int                `json:"price"`
	Users            []User
}
