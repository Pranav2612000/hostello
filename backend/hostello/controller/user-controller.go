package controller

import (
	"hostello_app/hostello/entity"
	"hostello_app/hostello/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserController interface {
	SaveUser(ctx *gin.Context)
	RegisterUserRoutes(rg *gin.RouterGroup)
}

type userController struct {
	service service.UserService
}

func NewUserController(service service.UserService) UserController {
	return &userController{
		service: service,
	}
}

func (c *userController) SaveUser(ctx *gin.Context) {
	var user entity.User
	ctx.BindJSON(&user)
	c.service.Save(user)
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}

func (c *userController) RegisterUserRoutes(rg *gin.RouterGroup) {
	hostelroute := rg.Group("/user")
	hostelroute.POST("/save", c.SaveUser)
}
