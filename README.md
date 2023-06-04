<div align="center">
  
  # Hobby Art
  
</div>

![Hobby Art](https://github.com/fogarea/online-shop/assets/68968769/9b025731-7e33-4f91-8993-5dfdea908d83)


## Description
Hobby Art offers a user-friendly interface to filter and select products by categories, price, and stock. Users can easily choose items and increase quantities in the cart. After shopping, a convenient form is available for placing orders

## Features

- **Product Filtering**: Two blocks of filters: category and brand/name selection. Dual-slider filters for price range and stock availability.
- **Query Parameter Integration**: Query parameters are updated when filters are changed. Restores the current state with applied filters after page reload.
- **Dynamic Filter Updates**: All filters and their elements dynamically update based on the applied filters. Text search is included as a filter option.
- **Sorting Functionality**: Products can be sorted by multiple criteria (e.g., price, rating).
- **Text Search**: Input field for searching and filtering products based on various fields. State of input field is preserved and can be restored after page reload.
- **View Toggling**: Ability to switch between different views for displaying products.
- **Product Quantity**: Products in the cart has buttons to increase or decrease its quantity. When the quantity is increased, the total quantity and overall price are updated in the header and on the cart page. The availability of the product is also checked to prevent adding more than the available quantity.
- **Pagination**: Implemented pagination with the option to choose the number of products displayed per page. The page count automatically adjusts based on the selected number of products. Users cannot navigate to non-existent pages. Pagination is recalculated when products are removed, ensuring the user remains on a valid page.
- **Promo Code Block**: If a valid promo code is entered, it can be added to the applied promo codes list. Each applied promo code updates the total price by reflecting the discount. Multiple promo codes can be applied, and their discounts are accumulated.


## Running the app

To start using the application, follow these steps:

```bash
# Clone the repository
$ git clone https://github.com/fogarea/online-shop.git

# Navigate to the `online-shop` directory
$ cd online-shop

# Install the dependencies
$ npm install --force

# Start the development server
$ npm run start
```

## Team

Application was developed by [Konstantin Smirnov](https://github.com/fogarea) and [Ilya Ivanik](https://github.com/Elijah-I)
