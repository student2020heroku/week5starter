export default (express, bodyParser, fs, crypto, http) => {
    const app = express();

    app
    .get('/login/', (req, res) => res.send('eliasgoss'))
    .get('/code/', (req, res) => fs.createReadStream(import.meta.url.substring(7)).pipe(res));
   
    // другие маршруты

    // проверяющий алгоритм может запустить этот код в своей песочнице
    // передав ему express и fs
    // и сравнить то, что выдаёт маршрут /login/ работающего приложения
    // по предоставляемому обучающимся адресу
    // с тем, что выдаёт по этому же маршруту вот этот код в песочнице
    return app;

}
