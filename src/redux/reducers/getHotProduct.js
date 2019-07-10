export default (dataProduct = [], action) => {
    switch (action.type) {
        //  Decrese Sort hot product
        case "GET_HOT_PRODUCT":
            const products = action.payload;
            const arraySold = [];
            const arrayHotProduct = [];
            for (let i = 0; i < products.length; i++) {
                arraySold.push(products[i].sold);
            }
            function bylength(a1, a2) {
                if (a1 < a2) return -1;
                if (a1 > a2) return 1;
                if (a1 === a2) return 0;
            }
            const arraySoldSorted = arraySold.sort(bylength).reverse();
            for (let i = 0; i < arraySoldSorted.length; i++) {
                for (let j = 0; j < 4; j++) {
                    if (arraySoldSorted[i] === products[j].sold) {
                        arrayHotProduct.push(products[j]);
                    }
                }
            }
            return arrayHotProduct;
        default:
            return dataProduct;
    }
};
