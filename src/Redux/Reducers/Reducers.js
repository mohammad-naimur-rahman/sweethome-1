import { bookingList } from '../../FakeData/BookingListData.js';
import { homedata } from '../../FakeData/HomeData.js';
import { facilities } from '../../FakeData/Facilities.js';

const initState = {
    homedata: homedata,
    facilities: facilities,
    bookingList: bookingList,
    loggedUserData:''
}

export const reducers = (state = initState, action)=>{
    if(action.type === "ADD_USER"){
        const user = action.payload;
        return{
            ...initState,
            loggedUserData: user
        }
    }
    if(action.type === "REMOVE_USER"){
        return{
            ...state,
            loggedUserData:''
        }
    }
    return state;
}
