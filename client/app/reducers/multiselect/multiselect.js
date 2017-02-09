import * as actions from "../../actions/multiselect/multiselect.js";

const multiselect = (state = {},action) => {
    switch (action.type) {
    	case actions.LOAD_DATA:
          return action.payload;
    }
    return state;
 };

 export default multiselect;