import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<500']
    }
};

export default function () {
    http.get('http://localhost:3003/user');
}
