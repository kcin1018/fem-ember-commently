export function initialize(app) {
    if (typeof FastBoot === 'undefined') {
        app.deferReadiness();

        const geo = navigator.geolocation;

        geo.getCurrentPosition((pos) => {
            let pt = pos.coords;
            let loc = {
                lat: pt.latitude,
                lng: pt.longitude
            };
            app.register('data:location', loc, {
                instantiate: false
            });
            app.advanceReadiness();
        });
    } else {
        app.deferReadiness();
        app.register('data:location', {
                lat: 'Unknown',
                lng: 'Unknown'
            }, {
            instantiate: false
        });
        app.advanceReadiness();
    }
}

export default {
    name: 'geo',
    initialize
};
