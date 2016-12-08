export function initialize(appInstance) {
  let fastbootService = appInstance.lookup('service:fastboot');

  let shoebox = fastbootService.get('shoebox');
  let shoeboxStore = shoebox.retrieve('request-data');

  if (fastbootService.get('isFastBoot')) {
    // fastboot renderer
    let headers = fastbootService.get('request.headers');
    let ua = headers.get('user-agent');

    appInstance.register('data:request', {
      userAgent: ua
    }, {
      instantiate: false
    });

    if (!shoeboxStore) {
      shoeboxStore = {};
      shoebox.put('request-data', shoeboxStore);
    }

    shoeboxStore.userAgent = ua;
  } else if (shoeboxStore) {
    // client side and has initially rendered with fastboot
    appInstance.register('data:request', {
      userAgent: shoeboxStore.userAgent
    }, {
      instantiate: false
    });
  } else {
    appInstance.register('data:request', {
      userAgent: 'Unknown'
    }, {
      instantiate: false
    });
  }
}

export default {
  name: 'request-info',
  initialize
};
