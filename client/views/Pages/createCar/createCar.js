Template.createCar.events({
  "click .add_car": function(event, template){
    var car = {
      title: $(template.find('#title')).val(),
    }

    if (car.title) {
      Meteor.call('add_car', car, function (error, carId) {
        Router.go('car', {_id: carId });
      })
    }
  },

  "change .add_car_image": function (event, template) {
    var input = template.find('.add_car_image')

    if ( input.files && input.files[0] ) {
        var fileReader = new FileReader();
        
        fileReader.onload = function(e) {
          console.log(e.target.result)
        }

        fileReader.readAsDataURL( input.files[0] );
    }
  }
})
