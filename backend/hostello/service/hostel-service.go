package service

import (
	"context"
	"hostello_app/hostello/entity"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type HostelService interface {
	Save(entity.Hostel) error
	AppendUser(entity.User, *string) ([]entity.User, error)
	FindAll(*string) []entity.Hostel
}

type hostelService struct {
	hostelCollection *mongo.Collection
	ctx              context.Context
}

func NewHostel(hostelCollection *mongo.Collection, ctx context.Context) HostelService {
	return &hostelService{
		hostelCollection: hostelCollection,
		ctx:              ctx,
	}
}

func (service *hostelService) Save(hostel entity.Hostel) error {
	_, err := service.hostelCollection.InsertOne(service.ctx, hostel)
	return err
}

func (service *hostelService) AppendUser(user entity.User, hostelName *string) ([]entity.User, error) {
	var hostel entity.Hostel
	var userList []entity.User
	filter := bson.D{bson.E{Key: "hostelname", Value: *hostelName}}
	cursor := service.hostelCollection.FindOne(service.ctx, filter)

	err := cursor.Decode(&hostel)
	if err != nil {
		return nil, err
	}
	userList = append(hostel.Users, user)
	update := bson.D{{"$set", bson.D{{"users", userList}}}}
	_, err = service.hostelCollection.UpdateOne(service.ctx, filter, update)
	if err != nil {
		return nil, err
	}
	return userList, nil
}

func (service *hostelService) FindAll(city *string) []entity.Hostel {
	var hostels []entity.Hostel
	query := bson.D{bson.E{Key: "city", Value: *city}}
	cursor, err := service.hostelCollection.Find(service.ctx, query)
	if err != nil {
		return nil
	}
	for cursor.Next(service.ctx) {
		var hostel entity.Hostel
		err := cursor.Decode(&hostel)
		if err != nil {
			return nil
		}
		hostels = append(hostels, hostel)
	}
	if err := cursor.Err(); err != nil {
		return nil
	}
	cursor.Close(service.ctx)
	return hostels
}
