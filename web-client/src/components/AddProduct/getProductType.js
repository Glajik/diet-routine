export const getProductType = (selectedCategory) => {
  switch (selectedCategory) {
    case 'dairy_products':
      return 'liquid'
    case 'oils_fats_and_shortenings':
      return 'liquid'
    case 'meat_and_poultry':
      return 'solid'
    case 'fish_and_seafood':
      return 'solid'
    case 'vegetables':
      return 'solid'
    case 'fruits':
      return 'solid'
    case 'breads_cereals_and_grains':
      return 'solid'
    case 'soups':
      return 'liquid'
    case 'desserts_and_sweets':
      return 'solid'
    case 'nuts_and_seeds':
      return 'solid'
    case 'beverages':
      return 'liquid'
  }
}