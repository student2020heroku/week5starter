export default (express, bodyParser, fs, crypto, http) => {
    const app = express();


    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
        }; 
    

    app
    .use((r, res, next) => { r.res.set(CORS); next(); })
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/sha1/:input', r => {
        const shasum = crypto.createHash('sha1');
        shasum.update(r.params.input);
    
        r.res.send(shasum.digest('hex'));
    })
    
    .get('/login/', (req, res) => res.send('goss'))
    .get('/code/', (req, res) => {
        res.set({'Content-Type': 'text/plain; charset=utf-8'});
        fs.createReadStream(import.meta.url.substring(7)).pipe(res);
    })
    ;

    app.all('/req/', (req, res) => {
        const addr = req.method === 'POST' ? req.body.addr : req.query.addr;

        http.get(addr, (r, b = '') => {
            r
            .on('data', d => b += d)
            .on('end', () => res.send(b));
        });
    })

    // проверяющий алгоритм может запустить этот код в своей песочнице
    // передав ему express и fs
    // и сравнить то, что выдаёт маршрут /login/ работающего приложения
    // по предоставляемому обучающимся адресу
    // с тем, что выдаёт по этому же маршруту вот этот код в песочнице
    return app;
    return app;

}
