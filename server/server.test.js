"use strict"

// *****************************************************************************
// Requires

const request = require( "supertest" )
const expect = require( "expect" )


// *****************************************************************************
// File to be tested

const app = require( "./server" ).app



// *****************************************************************************
// Tests

describe( "Web server", () => {


  describe( "GET / ", () => {

    it( "Should return hello world respone", ( done ) => {

      request( app )
        .get( "/" )
        .expect( 404 )
        .expect( ( res ) => {

          expect( res.body ).toInclude({
            error: "Page is lost"
          })

        })
        .end( done )


        // .expect( 404 )
        // .expect({error: "Page is lost"})
    })


  })



  describe( "GET /users", () => {


    // Route ["/users"]
    it( "Should return users with Mikael Wallin, 29", ( done ) => {

      request( app )
        .get( "/users" )
        .expect( 200 )
        .expect( ( res ) => {

          expect( res.body ).toInclude({
            name: "Mikael Wallin",
            age : 29
          })

        })
        .end( done )

    })


  })

})


