package controller

import (
	"fmt"
	"hostello_app/hostello/entity"
	"hostello_app/hostello/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type HostelController interface {
	Savehostel(ctx *gin.Context)
	FindAll(ctx *gin.Context)
	FindById(ctx *gin.Context)
	AppendUser(ctx *gin.Context)
	FindDistinct(ctx *gin.Context)
	SendEmail(ctx *gin.Context)
	RegisterHostelRoutes(rg *gin.RouterGroup)
}

type controller struct {
	service service.HostelService
}

func NewHostelController(service service.HostelService) HostelController {
	return &controller{
		service: service,
	}
}

func (c *controller) FindAll(ctx *gin.Context) {
	var city string = ctx.Param("city")
	hostel := c.service.FindAll(&city)
	ctx.JSON(http.StatusOK, hostel)
}

func (c *controller) FindById(ctx *gin.Context) {
	var _id string = ctx.Param("id")
	hostel := c.service.FindById(&_id)
	ctx.JSON(http.StatusOK, hostel)
}

func (c *controller) Savehostel(ctx *gin.Context) {
	var hostel entity.Hostel
	ctx.BindJSON(&hostel)
	id, _ := c.service.Save(hostel)
	ctx.JSON(http.StatusOK, gin.H{"message": "success", "id": id})
}

func (c *controller) AppendUser(ctx *gin.Context) {
	var user entity.User
	ctx.BindJSON(&user)
	var hostelName string = ctx.Param("hostelName")
	ulist, _ := c.service.AppendUser(user, &hostelName)
	ctx.JSON(http.StatusOK, ulist)
}

func (c *controller) FindDistinct(ctx *gin.Context) {
	city := c.service.FindDistinctCity()
	ctx.JSON(http.StatusOK, gin.H{"message": "success", "city": city})
}

func (c *controller) SendEmail(ctx *gin.Context) {
	var user entity.User
	ctx.BindJSON(&user)
	fmt.Println(user)
	var hostelid string = ctx.Param("hostelid")
	fmt.Println(hostelid)
	c.service.SendDetails(user, &hostelid)
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}
func (c *controller) RegisterHostelRoutes(rg *gin.RouterGroup) {
	hostelroute := rg.Group("/hostel")
	hostelroute.GET("/findall/:city", c.FindAll)
	hostelroute.POST("/save", c.Savehostel)
	hostelroute.PUT("/appenduser/:hostelName", c.AppendUser)
	hostelroute.GET("/findbyId/:id", c.FindById)
	hostelroute.GET("/city", c.FindDistinct)
	hostelroute.POST("/email/:hostelid", c.SendEmail)
}
