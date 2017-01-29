"use strict"

// *****************************************************************************
// Requires

const express = require( "express" )

const app = express()



// *****************************************************************************
// Routes

app.get( "/", ( req, res ) => {

  // res.send( "Hello world eater" )

  res.status( 404 ).send({
    error: "Page is lost",
    name : "Todo app v1.0"
  })

})



app.get( "/users", ( req, res ) => {

  const users = [
    {
      name: "Mikael Wallin",
      age : 29
    },
    {
      name: "Emma Hultin",
      age : 30
    },
    {
      name: "Nisse",
      age : 5
    }
  ]

  res.send( users )


})



// *****************************************************************************
// Server start

app.listen( 3000 )


// *****************************************************************************
// exports

module.exports = {
  app
}
