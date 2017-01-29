"use strict"

// *****************************************************************************
// Requires

const expect = require( "expect" )



// *****************************************************************************
// File to be tested

const utils = require( "./utils" )



// *****************************************************************************
// Tests

describe( "Utils", () => {


  describe( "#add", () => {

    it( "Should add two numbers", () => {

      const result = utils.add( 33, 11 )

      expect( result ).toBeA( "number" ).toBe( 44 )

    })

  })




  describe( "#asyncAdd", () => {

    it( "Should async add two numbers", ( done ) => {

      utils.asyncAdd( 11, 15, ( sum ) => {

        expect( sum ).toBe( 26 ).toBeA( "number" )

        done()

      })

    })

  })




  describe( "Square", () => {

    // Square function
    it( "Should square 1 number", () => {

      const result = utils.square( 6 )

      expect( result ).toBeA( "number" ).toBe( 36 )

    })


    // Async square
    it( "Should async square a number", ( done ) => {

      utils.asyncSquare( 9, ( sum ) => {

        expect( sum ).toBeA( "number" ).toBe( 81 )

        done()

      })

    })




  })




  describe( "Name-stuff", () => {

    // Set name
    it( "Should set firstName and lastName on user", () => {

      const user = {
        age     : 30,
        location: "Sweden"
      }

      const result = utils.setName( user, "Mikael Wallin" )


      expect( result ).toInclude({
        firstName: "Mikael",
        lastName : "Wallin"
      })


    })



  })




})
