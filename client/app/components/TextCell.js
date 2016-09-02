import React from "react";
import { Cell } from "fixed-data-table";

const TextCell = ({rowIndex, data, col, ...props}) => ( 
	<Cell {...props}> 
		{data[rowIndex][col]} 
	</Cell> 
); 

export default TextCell;