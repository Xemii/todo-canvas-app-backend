function getRequest(context) {
    if (context && context.request) {
        return context.request.rawRequest;
    }
    return {};
}

function getAccounts(request) {
    if (request &&
        request.payload &&
        request.payload.meta &&
        request.payload.meta.current_app &&
        request.payload.meta.current_app.state &&
        request.payload.meta.current_app.state.account_selector
    ) {
        return request.payload.meta.current_app.state.account_selector.accounts;
    }
    return null;
}
