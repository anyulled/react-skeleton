import * as actions from "../../actions/tables/tables.js";

const startingColumns = [{
    key: "id",
    title:"ID",
    width: 100,
    type: "integer"
},
    {
        key: "name",
        title:"Name",
        width: 200,
        type: "string"
    },
    {
        key: "yearOfBirth",
        title:"Year of Birth",
        width: 150,
        type: "date"
    },
    {
        key: "country",
        title:"Country",
        width: 100,
        type: "string"
    },
    {
        key: "username",
        title:"Username",
        width: 150,
        type: "string"
    }];

const initialState = { // Each table we may perform actions upon requires an
        // object of its own
    users: {
        columns: startingColumns, // the first element cannot be ordered
            // no matter what
        rowSortKey: "id",
        rowSortDesc: false,
        pageNumber:2,
        numberOfPages:4
    }
};

const table = (state, action) => {
    switch (action.type) {
        case actions.TABLES_FILTER_ADD:
            let filters=state.filters;
            if(filters.filter(function(e) {return e.key == action.column.key;}).length==0){
            	let filter={...action.column};
                filters=[...filters,filter];
            }
            return {
                ...state,
                filters

            };
        
     };        

};

const filter = (state = {}, action) => {
	let ret={...state};
	if(ret.key==action.filter.key){
	    switch (action.type) {
	    	case actions.TABLES_FILTER_SET_ACTIVE:
		    	if(ret.key==action.filter.key){
					ret.active=action.active;	
				}
		    	if(!action.active){
		    		delete ret.searchValue;
		    		delete ret.searchOptionValue;
		    	}else{
		    		ret.searchOptionValue=ret.defaultOptionValue;
		    	}
		    	break;
		    case actions.TABLES_FILTER_SEARCH_VALUE:
	        	if(!action.value || action.value==""){
	                delete ret.searchValue;
	            }else{
	                ret.searchValue=action.value;	
	            }
		    	break;
		    case actions.TABLES_FILTER_SEARCH_OPTION:
		    	if(ret.key==action.filter.key){
	            	ret.searchOptionValue=action.option;        			
	            }
		    	break;
	    }
	}
    return ret;
};

const tables = (state = initialState, action) => {
    if (!action || !action.table) {
        return state;
    }

    let newState={...state};
	let targetTable={...newState[action.table]};
	if(targetTable==undefined || targetTable==null){
		targetTable={rowSortDesc: false};        		
	}
	newState[action.table]=targetTable;
	
	switch (action.type) {
        case actions.TABLES_COLUMN_SET_ORDER:        	
        	targetTable.columns=action.columns;
        	break;
        case actions.TABLES_ROW_SET_ORDER:
        	targetTable.rowSortDesc = (targetTable.rowSortKey === action.rowSortKey ? !targetTable.rowSortDesc : false)
        	targetTable.rowSortKey = action.rowSortKey;
        	break;
        case actions.TABLES_FILTER_LOAD:
        	//TODO FIXME ARGC use a decent mapping model
        	targetTable.filters=action.payload.map(filter=>{
        		let ret={...filter};
        		ret.allowOptions=ret.allow_options;
	    		ret.defaultOptionValue=ret.default_option;
	    		if(ret.allow_options != undefined){
	    			delete ret.allow_options;	
	    		}
	    		if(ret.default_option != undefined){
	    			delete ret.default_option;	
	    		}
	    		if(ret.allowed_values!=undefined){
	    			ret.allowedValues=[...ret.allowed_values];
	    			delete ret.allowed_values;
	    		}
        		return ret;
        	});
        	break;
        case actions.TABLES_FILTER_CLEAR:
        	targetTable.filters=[];
        	break;
        case actions.TABLES_FILTER_SET_ACTIVE:
        case actions.TABLES_FILTER_SEARCH_VALUE:
        case actions.TABLES_FILTER_SEARCH_OPTION:
        	if(targetTable.filters!=undefined && targetTable.filters!=null){
        		targetTable.filters=targetTable.filters.map(f=>filter(f,action));
        	}
        	break;
        case actions.TABLES_PAGINATION:
            targetTable.pageNumber=action.value;
            break;
        case actions.TABLES_FILTER_ERROR:
            break;
    }
    return newState;
};

export default tables;