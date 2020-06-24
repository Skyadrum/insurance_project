export const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const deletePolicy = (name) => {
    return{
      type: 'DELETE_POLICY',
      payload: name
    }
}

export const createClaim = (info) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: info.name,
            amount: info.amount
        }
    }
}
