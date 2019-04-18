import{ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actionTypes'
const initialState = {
    places: [],
    selectedplace:null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key:Math.random(),// should be unique key for deleting
                    name: action.placeName,  // name of place
                    image:{
                      uri:'https://www.flightclub.com/media/catalog/product/8/0/800389_1.jpg'
                    } 
                  })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places:state.places.filter(place=>{
                    return place.key!== state.selectedplace.key;
                  }),
                  selectedplace:null
            };
        case SELECT_PLACE:
            return{
                ...state,
                selectedplace:state.places.find(ItemDetail=>{
                    return ItemDetail.key=== action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return{
                ...state,
                selectedplace:null
            }
        default:
        return state;
    }
};
export default reducer;