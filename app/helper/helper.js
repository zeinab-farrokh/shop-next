const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((i) => i.id == id);
  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { productQuantity };
