"use strict"

// *****************************************************************************
// Require dependencies

const expect = require( "expect" )
const rewire = require( "rewire" )


// *****************************************************************************
// Require local files

let app = rewire( "./app.js" )


// *****************************************************************************
// Tests


describe( "App", () => {

  var db = {
    saveUser: expect.createSpy()
  }

  app.__set__( "db", db )



  it( "Should call the spy correctly", () => {

    const spy = expect.createSpy()

    spy( "Mikael", 29 )

    expect( spy ).toHaveBeenCalledWith( "Mikael", 29 )

  })


  it( "Should call saveUser with user object", () => {

    const email = "mikael.wallin@gmail.com"
    const password = "password"

    app.handleSignup( email, password )

    expect( db.saveUser ).toHaveBeenCalledWith({
      email,
      password
    })

  })


})

