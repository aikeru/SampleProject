import http from 'http';

export function get(options, callBack, _http = http) {
    //TODO: no url parsing, just specify the port you want
    _http.get({
        host: options.host,
        port: options.port,
        path: options.path
    }, function (response) {
        let body = '';
        response.on('data', function (d) {
            body += d;
        });
        response.on('end', function () {
            callBack(body);
        });
    });
}

