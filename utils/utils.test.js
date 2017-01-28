"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires

const expect = require( "expect" )



// *****************************************************************************
// *****************************************************************************
// File to be tested

const utils = require( "./utils" )



// *****************************************************************************
// *****************************************************************************
// Tests

// Add function
it( "Should add two numbers", () => {

  const result = utils.add( 33, 11 )

  expect( result ).toBeA( "number" ).toBe( 44 )

})


// Square function
it( "Should square 1 number", () => {

  const result = utils.square( 6 )

  expect( result ).toBeA( "number" ).toBe( 36 )

})

