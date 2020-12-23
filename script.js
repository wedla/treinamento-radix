import { check } from 'k6';
import http from 'k6/http';
// 1. init code

export default function (data) {
    let res = http.get('https://api.github.com/users/1');
    check(res, { 
        'status was 200': (r) => r.status == 200,
        'response should have login': (r) => { 
            const response = r.json();
            return response && response.login;
        },
        'login user equals 1': (r) => r.json().login === "1"
     });
}

export function teardown(data) {
    // 4. teardown code
}