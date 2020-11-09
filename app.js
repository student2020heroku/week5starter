module.exports = function(express, bodyParser, fs, http) {
    const app = express();

    app
    .get('/login/', (req, res) => res.send('eliasgoss'))
    .get('/code/', (req, res) => fs.createReadStream(__filename).pipe(res))
    .all('*', (req, res) => res.send('Working!'));

    // проверяющий алгоритм может запустить этот код в своей песочнице
    // передав ему перечисленные зависимости
    // и сравнить то, что выдаёт маршрут /login/ работающего приложения
    // по предоставляемому обучающимся адресу
    // с тем, что выдаёт по этому же маршруту вот этот код в песочнице
    return app;

}
