import { sendPug } from '../pug';

export default function initialize(app, ioConfig) {
    app.get('/cast', (req, res) => {
        
        const endpoints = ioConfig.getSocketEndpoints();
        if (endpoints.length === 0) {
            throw new HTTPError('No socket.io endpoints configured');
        }
        const socketBaseURL = endpoints[0].url;
        
        return sendPug(res, 'cast', {
            channelName: 'dinsfire',
            sioSource: `${socketBaseURL}/socket.io/socket.io.js`
        });
    });
}
