module.exports = () => {
    const customersDB = require('../data/customers.json');
    const jsonData = Object.keys(customersDB);
    const count = jsonData.length;

    const controller = {};

    function aZ(list) {
        return list.sort((a, b) => a.name["first"].localeCompare(b.name["first"], 'pt', {sensitivity: 'base'}))

     }

     function menorBudget(list) {
         return list.sort((a, b) => a.budget.localeCompare(b.budget, 'pt', {sensitivity: 'base'}))

     }


    controller.listCustomers = async (req, res) => {

        const { page = 1, limit = 10, filter = null} = req.query;

        try {
            let customers = customersDB;

            if(filter == "a-z")
            {
                let customers = aZ(customersDB);
            } else if(filter == "z-a")
            {
                let customers = aZ(customersDB).reverse();
            } else if(filter == "maior-budget")
            {
                let customers = menorBudget(customersDB).reverse();
            } else if(filter == "menor-budget")
            {
                let customers = menorBudget(customersDB);
            }



            const posts = customers.slice((page - 1) * limit, limit * page);

            //return response with posts, total pages, and current page
           res.status(200).json({
            posts,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            filter: filter
            });

        } catch (err) {
            console.error(err.message);
        }

    }

    return controller;
}
