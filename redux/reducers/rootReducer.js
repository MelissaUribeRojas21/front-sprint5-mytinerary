import cityReducer from './cityReducer';
import hotelReducer from './hotelReducer';
import userReducer from './userReducer';
import { commentsAPI } from './commentAPI';




const rootReducer = {
    city: cityReducer,
    hotel: hotelReducer,
    user: userReducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
}

export default rootReducer;