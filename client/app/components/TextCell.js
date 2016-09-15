import React from "react";
import { Cell } from "fixed-data-table-2";

const TextCell = ({rowIndex, data, col, ...props}) => ( 
	<Cell {...props}> 
		{data[rowIndex][col]} 
	</Cell> 
); 

export default TextCell;