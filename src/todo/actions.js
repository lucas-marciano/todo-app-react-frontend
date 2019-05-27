import axios from "axios"

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(response => dispatch({type: 'SEARCH_TODO', payload: response.data}))
        .catch(err => console.log("search: " + err))
    }
}

export const add = description => {
    return dispatch => {
        axios.post(URL, {description})
        .then(response => dispatch(clear()))
        .then(response => dispatch(search()))
        .catch(err => console.log("handleRemove: " + err))
    }
}

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(response => dispatch(search()))
        .catch(err => console.log("remove: " + err))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { done: true })
        .then(response => dispatch(clear()))
        .then(response => dispatch(search()))
        .catch(err => console.log("markAsDone: " + err))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { done: false })
        .then(response => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: response.data}))
        .then(response => dispatch(search()))
        .catch(err => console.log("markAsPending: " + err))
    }
}

export const clear = () => {
    return [{ type: 'CLEAR_TODO' }, search()]
}