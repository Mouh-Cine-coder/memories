import * as api from '../api'


// Actions Creators 
export const getpots = () => async (dispatch) => {
    try {
        const { data } = await api.fetshPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);    
    }

    
}