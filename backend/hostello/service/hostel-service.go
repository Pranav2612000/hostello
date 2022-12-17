package service

import (
	"context"
	"fmt"
	"hostello_app/hostello/entity"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type HostelService interface {
	Save(entity.Hostel) (string, error)
	AppendUser(entity.User, *string) ([]entity.User, error)
	FindAll(*string) []entity.Hostel
	FindById(*string) entity.Hostel
	FindDistinctCity() []string
}

type hostelService struct {
	hostelCollection *mongo.Collection
	ctx              context.Context
}

type city struct {
	city []string
}

func NewHostel(hostelCollection *mongo.Collection, ctx context.Context) HostelService {
	return &hostelService{
		hostelCollection: hostelCollection,
		ctx:              ctx,
	}
}

func (service *hostelService) Save(hostel entity.Hostel) (string, error) {
	id, err := service.hostelCollection.InsertOne(service.ctx, hostel)
	if oid, ok := id.InsertedID.(primitive.ObjectID); ok {
		return oid.Hex(), err
	} else {
		return "", err
	}
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

func (service *hostelService) FindById(id *string) entity.Hostel {
	var hostel entity.Hostel
	objectId, err := primitive.ObjectIDFromHex(*id)
	if err != nil {
		return entity.Hostel{}
	}
	filter := bson.D{bson.E{Key: "_id", Value: objectId}}
	cursor := service.hostelCollection.FindOne(service.ctx, filter)
	err = cursor.Decode(&hostel)
	if err != nil {
		return entity.Hostel{}
	}
	return hostel
}

func (service *hostelService) FindDistinctCity() []string {
	var cities []string
	result, err := service.hostelCollection.Distinct(service.ctx, "city", bson.D{})
	if err != nil {
		return nil
	}
	for _, v := range result {
		valStr := fmt.Sprint(v)
		cities = append(cities, valStr)
	}
	return cities
}
