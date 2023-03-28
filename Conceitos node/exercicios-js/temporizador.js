const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function(){
    console.log('Executado tarefa1', new Date().getSeconds())
})

setTimeout(function(){
    tafera1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.day0fWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Exercutando tarefa2', new Date().getSeconds())
})