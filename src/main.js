export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-dialog');

    aurelia.start().then(app => app.setRoot());
}
