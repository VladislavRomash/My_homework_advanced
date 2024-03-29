import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) => {
                    switch (action.payload) {
                        case 'up':
                            return a.name > b.name ? 1 : -1
                        default:
                            return b.name > a.name ? 1 : -1
                    }
                }
            ) // need to fix
        }
        case 'check': {
            return state.filter(f => f.age >= 18) // need to fix
        }
        default:
            return state
    }
}
