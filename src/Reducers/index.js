import { combineReducers } from 'redux'

// Se recibe el estado inical y la accion por parte de los Actions
const policiesReducer = (listNames = [], action) => {
    switch (action.type) {
      case 'CREATE_POLICY':
      /* mediante el operador SPREAD(...) cambiamos TODO el valor de nuestro estado,
         por lo que nos llega en el payload */
        return [...listNames, action.payload]
      case 'DELETE_POLICY':
        return listNames.filter((policy) => { return policy.name !== action.payload })
      default:
        return listNames
    }
}

const financesReducer = (totalAmount = 120, action) => {
    switch (action.type) {
      case 'CREATE_POLICY':
        return totalAmount + action.payload.amount
      case 'CREATE_CLAIM':
        return totalAmount - action.payload.amount
      default:
        return totalAmount
    }
}

const claimReducer = (listOfClaims = [], action) => {
    switch (action.type) {
      case 'CREATE_CLAIM':
        return [...listOfClaims, action.payload]
      default:
        return listOfClaims
    }
}

const nameReducer = (name = 'Aseguradora', action) => {
    return name
}

// CombineReducers nos genera el estado GLOBAL de nuestra aplicacion
export default combineReducers ({
    insuranceName: nameReducer,
    namesList: policiesReducer,
    totalAmount: financesReducer,
    claimsList: claimReducer
})
