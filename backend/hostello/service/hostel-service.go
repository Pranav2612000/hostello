package service

import (
	"context"
	"fmt"
	"hostello_app/hostello/entity"
	"net/smtp"

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
	SendDetails(entity.User, *string)
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

func (service *hostelService) SendDetails(user entity.User, hostelid *string) {
	var hostel entity.Hostel = service.FindById(hostelid)
	// hostel = service.FindById(hostelid)
	// from := "wtlproject20@gmail.com"
	// password := "seoyapfpururwakq"
	from := "hostello.co.in@gmail.com"
	password := "phaeddbttbpywhab"
	auth := smtp.PlainAuth("", from, password, "smtp.gmail.com")
	to := []string{
		// "wtlproject20@gmail.com",
		"hostello.co.in@gmail.com",
		user.Email,
	}
	// fmt.Println(user)
	// fmt.Println(to)
	// fmt.Println(hostel)
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	headers := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\""
	subject := "Looks like we got your attention!"
	body := "<p>Hola amigos!</p><br><p>Thank you for your interest in " + hostel.HostelName + ".</p><p>We've processed your enquiry request.<p>Until then, sit back, explore, and chill. Hostello will get back to you within 12 hours.</p><p> To explore more options, click on the link below. http://3.87.21.144:3000/</p><br><p>Toodles:))</p><p><img src=\"../assets/logo.png\"</p>"
	message := "Subject: " + subject + "\n" + headers + "\n\n" + body
	// Authentication.
	// Sending email.
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, []byte(message))
	if err != nil {
		fmt.Println("Email error")
		fmt.Println(err)
		return
	}
}
