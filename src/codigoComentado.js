if(product.category === 'Empanadas' && product.cartQuantity <= 24 ||
           product.category === 'Postre' && product.cartQuantity <= 20 ||
           product.category === 'Pizza' && product.cartQuantity <= 6 ||
           product.category === 'Bebida' && product.cartQuantity < 8
        )