package main

import (
	"context"
	"fmt"
	"hostello_app/hostello/controller"
	"hostello_app/hostello/service"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

var (
	server   *gin.Engine
	hs       service.HostelService
	hc       controller.HostelController
	ctx      context.Context
	hostelrc *mongo.Collection
	client   *mongo.Client
	err      error

	us     service.UserService
	uc     controller.UserController
	userrc *mongo.Collection
)

func init() {
	ctx = context.TODO()
	ctx := context.Background()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb+srv://hostello:hostello123@cluster0.3i52dk5.mongodb.net/?retryWrites=true&w=majority"))
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("mongo connection established")

	hostelrc = client.Database("hostelDb").Collection("hostels")
	hs = service.NewHostel(hostelrc, ctx)
	hc = controller.NewHostelController(hs)

	userrc = client.Database("hostelDb").Collection("users")
	us = service.NewUser(userrc, ctx)
	uc = controller.NewUserController(us)
	server = gin.Default()
    server.Use(cors.Default())

}

func main() {

	defer client.Disconnect(ctx)

	basepath := server.Group("/v1")
	hc.RegisterHostelRoutes(basepath)
	uc.RegisterUserRoutes(basepath)
	server.Run(":8080")
}
