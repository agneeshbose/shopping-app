exports.getProduts = (req, res, next) => {
    const products = [];
    const navItems = [
        { name: "Products", active: true, url: "/admin/products" }
    ];

    res.render("admin/products.ejs", {
        products: products,
        navItems: navItems
    });
};
