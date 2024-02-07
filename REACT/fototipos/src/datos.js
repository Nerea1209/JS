import IMAGES from "./images.js";

const DATOS = {
    "preguntas": [
        {
            "id": "p1",
            "enunciado": "1. ¿Cuál es el color natural de su piel cuando no está bronceada?",
            "respuestas": [
                { "name": "p1", "id": "o11", "src": IMAGES.piel.rojiza, "alt": "Piel rojiza", "texto": "Rojiza", "valor": 0 },
                { "name": "p1", "id": "o12", "src": IMAGES.piel.blanca, "alt": "Piel blanca", "texto": "Blanca", "valor": 0 },
                { "name": "p1", "id": "o13", "src": IMAGES.piel.beigeClaro, "alt": "Piel beige claro", "texto": "Beige claro", "valor": 2 },
                { "name": "p1", "id": "o14", "src": IMAGES.piel.beige, "alt": "Piel beige", "texto": "Beige", "valor": 4 },
                { "name": "p1", "id": "o15", "src": IMAGES.piel.marronClaro, "alt": "Piel marrón claro", "texto": "Marrón claro", "valor": 8 },
                { "name": "p1", "id": "o16", "src": IMAGES.piel.marron, "alt": "Piel marrón", "texto": "Marrón", "valor": 12 },
                { "name": "p1", "id": "o17", "src": IMAGES.piel.negra, "alt": "Piel negra", "texto": "Negra", "valor": 16 }
            ]
        },
        {
            "id": "p2",
            "enunciado": "2. ¿De qué color natural es su pelo?",
            "respuestas": [
                { "name": "p2", "id": "o21", "src": IMAGES.pelo.pelirrojo, "alt": "Pelirrojo", "texto": "Pelirrojo", "valor": 0 },
                { "name": "p2", "id": "o22", "src": IMAGES.pelo.rubioClaro, "alt": "Rubio claro", "texto": "Rubio claro", "valor": 0 },
                { "name": "p2", "id": "o23", "src": IMAGES.pelo.rubio, "alt": "Rubio", "texto": "Rubio", "valor": 2 },
                { "name": "p2", "id": "o24", "src": IMAGES.pelo.castanoClaro, "alt": "Castaño claro", "texto": "Castaño claro", "valor": 2 },
                { "name": "p2", "id": "o25", "src": IMAGES.pelo.castano, "alt": "Castaño", "texto": "Castaño", "valor": 4 },
                { "name": "p2", "id": "o26", "src": IMAGES.pelo.castanoOscuro, "alt": "Castaño oscuro", "texto": "Castaño oscuro", "valor": 8 },
                { "name": "p2", "id": "o27", "src": IMAGES.pelo.castanoMuyOscuro, "alt": "Castaño muy oscuro", "texto": "Castaño muy oscuro", "valor": 12 },
                { "name": "p2", "id": "o28", "src": IMAGES.pelo.negro, "alt": "Negro", "texto": "Negro", "valor": 16 }
            ]
        },
        {
            "id": "p3",
            "enunciado": "3. ¿De qué color tiene los ojos?",
            "respuestas": [
                { "name": "p3", "id": "o31", "src": IMAGES.ojos.ojosAzulClaro, "alt": "Azules claros", "texto": "Azules claros", "valor": 0 },
                { "name": "p3", "id": "o32", "src": IMAGES.ojos.ojosVerdeClaro, "alt": "Verdes claros", "texto": "Verdes claros", "valor": 0 },
                { "name": "p3", "id": "o33", "src": IMAGES.ojos.ojosGrisClaro, "alt": "Grises claros", "texto": "Grises claros", "valor": 0 },
                { "name": "p3", "id": "o34", "src": IMAGES.ojos.ojosAzules, "alt": "Azules", "texto": "Azules", "valor": 2 },
                { "name": "p3", "id": "o35", "src": IMAGES.ojos.ojosVerdes, "alt": "Verdes", "texto": "Verdes", "valor": 2 },
                { "name": "p3", "id": "o36", "src": IMAGES.ojos.ojosGrises, "alt": "Grises", "texto": "Grises", "valor": 2 },
                { "name": "p3", "id": "o37", "src": IMAGES.ojos.ojosMarronClaro, "alt": "Marrones claros", "texto": "Marrones claros", "valor": 4 },
                { "name": "p3", "id": "o38", "src": IMAGES.ojos.ojosMarrones, "alt": "Marrones", "texto": "Marrones", "valor": 8 },
                { "name": "p3", "id": "o39", "src": IMAGES.ojos.ojosMarronesOscuros, "alt": "Marrones oscuros", "texto": "Marrones oscuros", "valor": 12 },
                { "name": "p3", "id": "o310", "src": IMAGES.ojos.ojosNegros, "alt": "Negros", "texto": "Negros", "valor": 16 }
            ]
        },
        {
            "id": "p4",
            "enunciado": "4. ¿Cuántas pecas tiene de manera natural en el cuerpo cuando no está bronceado?",
            "respuestas": [
                { "name": "p4", "id": "o41", "src": IMAGES.pecas.muchas, "alt": "Muchas", "texto": "Muchas", "valor": 0 },
                { "name": "p4", "id": "o42", "src": IMAGES.pecas.algunas, "alt": "Algunas", "texto": "Algunas", "valor": 2 },
                { "name": "p4", "id": "o43", "src": IMAGES.pecas.pocas, "alt": "Unas cuantas", "texto": "Unas cuantas", "valor": 4 },
                { "name": "p4", "id": "o44", "src": IMAGES.pecas.ninguna, "alt": "Ninguna", "texto": "Ninguna", "valor": 8 }
            ]
        },
        {
            "id": "p5",
            "enunciado": "5. ¿Qué categoría describe mejor su herencia genética?",
            "respuestas": [
                { "name": "p5", "id": "o51", "texto": "Raza blanca de piel muy blanca", "valor": 0 },
                { "name": "p5", "id": "o52", "texto": "Raza blanca de piel clara", "valor": 2 },
                { "name": "p5", "id": "o53", "texto": "Raza blanca de piel morena (Mediterráneo)", "valor": 4 },
                { "name": "p5", "id": "o54", "texto": "Oriente Medio, hindú, asiático, hispano-americano", "valor": 8 },
                { "name": "p5", "id": "o55", "texto": "Aborigen, africano, afroamericano", "valor": 12 }
            ]
        },
        {
            "id": "p6",
            "enunciado": "6. ¿Qué categoría describe mejor su potencial de QUEMADURA exponiéndose al sol una hora en verano?",
            "respuestas": [
                { "name": "p6", "id": "o61", "texto": "Siempre se quema y no se broncea nunca", "valor": 0 },
                { "name": "p6", "id": "o62", "texto": "Habitualmente se quema, pero puede broncearse ligeramente", "valor": 2 },
                { "name": "p6", "id": "o63", "texto": "Se quema ocasionalmente, pero se broncea moderadamente", "valor": 4 },
                { "name": "p6", "id": "o64", "texto": "Nunca se quema y se broncea con facilidad", "valor": 8 },
                { "name": "p6", "id": "o65", "texto": "Raramente se quema y se broncea profundamente", "valor": 10 },
                { "name": "p6", "id": "o66", "texto": "Nunca se quema", "valor": 12 }
            ]
        },
        {
            "id": "p7",
            "enunciado": "7. ¿Qué categoría describe mejor su potencial de BRONCEADO?",
            "respuestas": [
                { "name": "p7", "id": "o71", "texto": "Nunca se broncea", "valor": 0 },
                { "name": "p7", "id": "o72", "texto": "Se puede broncear ligeramente", "valor": 2 },
                { "name": "p7", "id": "o73", "texto": "Se puede broncear moderadamente", "valor": 4 },
                { "name": "p7", "id": "o74", "texto": "Se puede broncear profundamente", "valor": 8 }
            ]
        }
    ],
    "resultados": [
        { "tipo": 1, "min": 0, "max": 7, "body": "Su piel es muy sensible a la luz solar." },
        { "tipo": 2, "min": 8, "max": 21, "body": "Su piel es sensible a la luz solar." },
        { "tipo": 3, "min": 22, "max": 42, "body": "Su piel tiene sensibilidad normal a la luz solar." },
        { "tipo": 4, "min": 43, "max": 68, "body": "Su piel tiene tolerancia a la luz solar." },
        { "tipo": 5, "min": 69, "max": 84, "body": "Su piel es oscura y tiene alta tolerancia a la luz solar." },
        { "tipo": 6, "min": 85, "max": 1000, "body": "Su piel es negra y tiene altísima tolerancia a la luz solar." }
    ]
}

export default DATOS;