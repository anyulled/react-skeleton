export const IS_EDITING_USER = "ui/edit_user";

export function editingUserChanged(isEditingUser) { 
	return { 
		type: IS_EDITING_USER, 
		isEditingUser 
	} 
} 
