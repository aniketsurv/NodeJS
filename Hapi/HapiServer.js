// const Hapi = require('@hapi/hapi');
// const jwt = require('jsonwebtoken');
// const HapiAuthJwt2 = require('hapi-auth-jwt2');



import Hapi from '@hapi/hapi';
import jwt  from 'jsonwebtoken';

const JWT_SECRET = 'gfg_jwt_secret_key';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Public route (no authentication required)
    server.route({
        method: 'POST',
        path: '/login',
        options: {
            auth: false
        },
        handler: (request, h) => {
            
            console.log("request-->",request.payload)
            const user = request.payload
            console.log("user-",user)

            // Generate JWT token
            const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '2h' });
            console.log("token-",token)
            return { token };
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
