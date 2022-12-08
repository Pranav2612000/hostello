package service

import (
	"context"
	"hostello_app/hostello/entity"

	"go.mongodb.org/mongo-driver/mongo"
)

type UserService interface {
	Save(entity.User) error
}

type userService struct {
	userCollection *mongo.Collection
	ctx            context.Context
}

func NewUser(userCollection *mongo.Collection, ctx context.Context) UserService {
	return &userService{
		userCollection: userCollection,
		ctx:            ctx,
	}
}

func (service *userService) Save(user entity.User) error {
	_, err := service.userCollection.InsertOne(service.ctx, user)
	return err
}
