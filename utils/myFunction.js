
export function toggleTab(index, activeTab, filterItemsByType) {
 activeTab.value = index;
 filterItemsByType();
}

export function filterItemsByTypes (tabs, activeTab, filteredItems, items){
    const selectedType = tabs.value[activeTab.value];
    filteredItems.value = selectedType === "All"
        ? items.value
        : items.value.filter(item => {
            return item.type === selectedType;
        });

      
};

export function selectAllRowsLocal (selectAll, selectedItems, filteredItems) {
    if (selectAll.value) {
        selectedItems.value = filteredItems.value.map((item) => item.id);
    } else {
        selectedItems.value = [];
    }
};

export function showDot (itemId,filteredItems, show, isButtonDisable, showDrop, buttonText) {
    show.value[itemId] = true;
    isButtonDisable.value[itemId] = true;
    buttonText.value[itemId] = "Approved";
    filteredItems.value.forEach((item) => {
      if (item.id !== itemId) {
        showDrop.value[item.id] = false;
      }
    });
  };

 export function revokeLinkSent(itemId, buttonText, showDrop, isButtonRevoked ) {
    buttonText.value[itemId] = "Link Revoked"
    isButtonRevoked.value[itemId] = true;
    showDrop.value[itemId] = false;
  };

  export function initializeButtonTexts(filteredItems, buttonText) {
    filteredItems.value.forEach((item) => {
        buttonText.value[item.id] = "Approve";
    });
};

export function showDropDowns(showDrop, filteredItems, itemId){
    showDrop.value[itemId] = !showDrop.value[itemId];
    filteredItems.value.forEach((item) => {
      if (item.id !== itemId) {
        showDrop.value[item.id] = false;
      }
    });
}

export function resendLinks(isButtonDisable, buttonText, isButtonRevoked, showDrop, itemId){
    isButtonDisable.value[itemId] = true;
    buttonText.value[itemId] = "Approved";
    isButtonRevoked.value[itemId] = false;
    showDrop.value[itemId] = false;
}

export function  resendUserFunction(selectedItems,isButtonDisable, buttonText, isButtonRevoked, showDrop){
    selectedItems.value.forEach((itemId) => {
        isButtonDisable.value[itemId] = true;
        buttonText.value[itemId] = "Approved";
        isButtonRevoked.value[itemId] = false;
        showDrop.value[itemId] = false;
    })
}
export function isButtonsDisabled(itemId, disabledButtons){
    return disabledButtons.value.includes(itemId);
}

export function removeUsers (itemId, filteredItems, selectedItems){
    const indexToRemove = filteredItems.value.findIndex((item) => item.id === itemId);
    if (indexToRemove !== -1) {
      filteredItem.value.splice(indexToRemove, 1);
      selectedItems.value = selectedItems.value.filter((id) => id !== itemId);
    }
}

export function removeSelectedUsers(items, selectedItems) {
    selectedItems.value.forEach((itemId) => {
      const indexToRemove = items.value.findIndex((item) => item.id === itemId);
      if (indexToRemove !== -1) {
        items.value.splice(indexToRemove, 1);
      selectedItems.value = selectedItems.value.filter((id) => id !== itemId);
      }
    });
  
  }
  
export function revokeUserFunction(selectedItems,showDrop, show, buttonText, isButtonDisable, isButtonRevoked) {
    selectedItems.value.forEach((itemId) => {
      if (!isButtonRevoked.value[itemId]) {
        show.value[itemId] = true;
        buttonText.value[itemId] = "Link Revoked";
        isButtonRevoked.value[itemId] = true;
        isButtonDisable.value[itemId] = true;
        showDrop.value[itemId] = false;
      }
    });
  }
  

export function approveUserFunction(selectedItems,showDrop, show, buttonText, isButtonDisable, isButtonRevoked){
    selectedItems.value.forEach((itemId) => {
          show.value[itemId] = true;
          isButtonRevoked.value[itemId] = false;
          buttonText.value[itemId] = "Approved";
          isButtonDisable.value[itemId] = true;
        showDrop.value[itemId] = false;
        
      });
}

  
  