"use strict"

// *****************************************************************************
// Functions here

function add ( a, b ) {

  return a + b

}



function asyncAdd ( a, b, callback ) {

  setTimeout( () => {

    callback( a + b )

  }, 1000 )


}



function square ( a ) {

  return a * a

}



function asyncSquare ( a, callback ) {

  setTimeout( () => {

    callback( a * a )

  }, 1000 )

}




function setName ( user, fullname ) {

  const names = fullname.split( " " )

  user.firstName = names[0]
  user.lastName = names[1]

  return user

}



// *****************************************************************************
// Exports

module.exports = {

  add,
  asyncAdd,
  square,
  asyncSquare,
  setName

}

