// reducer when we have a datalayer a reducer is how we are able to dispatch the action into data layer.and how to pull it
export const initialState = {
    basket: [],//empty basket to begain with
    user: null
  };
  //selector
  /* it's going to take the basket itself and 
  it's going to simply return,nd going
   to simply return get the and we're going to do 
   optional changing to prevent everything from breaking,
   we're going to say reduce is a functionn which extremely
   powerful,the perpose of reduce is to 
   maps through the basket it's next,reduce does is it goes
   ahead it iterates through the basket and then it's going to tally up the total
   we're going to have an initial amount and we're going to iterate for each item

  */  
  export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  
  
    const reducer= (state,action)=>{
      console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket:[...state.basket,action.item],
        }
        case 'EMPTY_BASKET':
          return {
            ...state,
            basket: []
          }
    
        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
          
      return {
        ...state,
        basket: newBasket
      }
      case "SET_USER":
      return {
        ...state,
        user: action.user
      }
        default:
            return state;
    }
    
  }
export default reducer
