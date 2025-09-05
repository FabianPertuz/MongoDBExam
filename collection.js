db.createCollection("registro_instrumento", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "nombre",
                "tipo",
                "precio",
                "estado",
                "sedeid"
            ],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "nombre del instrumento (required)"
                },
                tipo: {
                    bsonType: "string",
                    enum:["piano","guitarra","violin","bateria","bajo","canto"],
                    description: "El tipo de instrumento al que pertenece (required)"
                },
                precio: {
                    bsonType: "int",
                    minimum: 1,
                    description: "El precio mínimo es de 1(required)"
                },
                estado: {
                    bsonType: "string",
                    enum: ["disponible", "mantenimiento","reservado",],
                    description: "Los vehículos permitidos solo pueden tomar estos valores: Carro, Moto, Camión, Bicicleta"
                },
                sedeId:{ 
                bsonType:"objectId",
                description:"identificador unico"
                },
                fecha_registro:{
                    bsonType:"date",
                    description:"hora de entrada completa(optional)"
                },
                cantidadinicial:{
                    bsonType:"int",
                    minimum:1,
                    description:("cantidad de instrumentos(optional)")
                }
            },
        }
    }
})
