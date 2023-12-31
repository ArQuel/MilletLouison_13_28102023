import {
    USER_LOGIN,
    ERROR,
    LOGOUT,
    LOADING,
    USER_PROFILE,
} from '../actions/types';

const initialState = {
    token: null,
    user: null,
    isLoading: false,
    error: false,
};

export default function User (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOGIN: {
            return {
                ...state,
                token: payload.token,
                error: false,
            };
        }
        case USER_PROFILE: {
            return {
                ...state,
                user: payload.user,
            };
        }
        case LOADING: {
            return {
                ...state,
                isLoading: payload,
            };
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isLoading: false,
                error: false,
            };
        }
        case ERROR: {
            return {
                ...state,
                error: payload,
            };
        }
        default:
            return state;
    }
}
