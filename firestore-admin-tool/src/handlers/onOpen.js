/* globals SpreadsheetApp */

// eslint-disable-next-line no-unused-vars
function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Admin Tool')
    .addSubMenu(
      ui.createMenu('Products')
        .addItem('Get All', 'getProductsAndUpdateTab'),
    )
    .addToUi()
}

// eslint-disable-next-line no-unused-vars
function getProductsAndUpdateTab() {
  console.log('getProductsAndUpdateTab() called')
}
