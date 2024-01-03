
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

 export function revokeLinkSent(itemId, buttonText, showDrop,isButtonDisable, isButtonRevoked ) {
    buttonText.value[itemId] = "Link Revoked"
    isButtonRevoked.value[itemId] = true;
    isButtonDisable.value[itemId] = true;
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

export function removeUsers (itemId,items, filteredItems, selectedItems){
  const indexToRemove = filteredItems.value.findIndex((item) => item.id === itemId);
  if (indexToRemove !== -1) {
    filteredItems.value.splice(indexToRemove, 1);
    selectedItems.value = selectedItems.value.filter((id) => id !== itemId);

    const originalIndex = items.value.findIndex((item) => item.id === itemId);
    if (originalIndex !== -1) {
      items.value.splice(originalIndex, 1);
    }
  }
}

export function removeSelectedUsers(filteredItems, selectedItems, items) {
  selectedItems.value.forEach((itemId) => {
    const indexToRemove = filteredItems.value.findIndex((item) => item.id === itemId);
    if (indexToRemove !== -1) {
      filteredItems.value.splice(indexToRemove, 1);
      selectedItems.value = selectedItems.value.filter((id) => id !== itemId);

      // Remove the item from the original items array
      const originalIndex = items.value.findIndex((item) => item.id === itemId);
      if (originalIndex !== -1) {
        items.value.splice(originalIndex, 1);
      }
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

  
export function handleCheckboxChange(selectedItem, event, show) {
  const itemId = selectedItem.id;
  show.value[itemId] = event.target.checked;
  if (event.target.checked) {
    console.log('Selected Row Data:', selectedItem);
  }
}


export function selectAllRowsLocal(selectAll, selectedItems, filteredItems, show) {
  if (selectAll.value) {
    selectedItems.value = filteredItems.value.map((item) => item.id);
    console.log('Selected Rows Data:', filteredItems.value);
    filteredItems.value.forEach((item) => {
      show.value[item.id] = true;
    });
  } else {
    selectedItems.value = [];
    filteredItems.value.forEach((item) => {
      show.value[item.id] = false;
    });
  }
}


export const closeModalHandler = (event, items, showDrop) => {
  if (!event || !event.target) {
    return;
  }
  items.value.forEach((item) => {
    let target = event.target;
    let isWorkElement = false;
    while (target !== null && !isWorkElement) {
      if (target.classList && target.classList.contains('waitlist-btn')) {
        isWorkElement = true;
      }
      target = target.parentElement;
    }
    if (showDrop.value[item.id] && !isWorkElement) {
      showDrop.value[item.id] = false;
    }
  });
};