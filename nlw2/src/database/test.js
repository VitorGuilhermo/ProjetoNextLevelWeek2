const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados
    proffyValue = {
        name: "Robin",
        avatar: "https://i.pinimg.com/474x/b2/d9/79/b2d979d6f352c0ab9d2fcc48ebe1a668--robin-one-piece-nico-robin.jpg",
        whatsapp: "40028922",
        bio: "Professora e arqueóloga",
    }
    classValue = {
        subject: 7, 
        cost: "20,00" 
        //o proffy id virá pelo banco de dados
    }
    classScheduleValues = [
    // class_id virá pelo banco de dados após cadastrar a class
        {    
            weekday: 1, 
            time_from: 720, 
            time_to: 1220 
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220 
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
    
    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (18h) precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima 
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    //console.log(selectClassesSchedule)
})