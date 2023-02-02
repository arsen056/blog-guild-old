
const initState: AppStateStatusType = {
  status: 'idle'
}

type AppStateStatusType = {
  status: StatusAppType
}

export type StatusAppType = 'idle' | 'loading' | 'success'

export const appReducer = (state = initState, action: AppActionType) => {
  switch (action.type) {
    case "APP/SET_STATUS":
      return {...state, status: action.status}
    default:
      return state
  }
}

type AppActionType = ReturnType<typeof appSetStatus>

export const appSetStatus = (status: StatusAppType) => ({type: 'APP/SET_STATUS', status})