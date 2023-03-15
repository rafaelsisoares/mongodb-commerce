db.produtos.find({
    valoresNutricionais: {
        $elemMatch: { tipo: { $regex: /proteínas/i }, percentual: { $gte: 30, $lte: 40 } },
    },
}, { nome: 1, _id: 0 });