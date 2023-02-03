
const initState: AppStateStatusType = {
  status: 'idle',
  isSuperAdmin: true
}

type AppStateStatusType = {
  status: StatusAppType
  isSuperAdmin: boolean
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

export type AppActionType = ReturnType<typeof appSetStatus>

export const appSetStatus = (status: StatusAppType) => ({type: 'APP/SET_STATUS', status})