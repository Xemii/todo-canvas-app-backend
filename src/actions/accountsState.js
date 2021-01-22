function showMyAccountsList(context) {
    sendActionToClient({
        type: 'filter_accounts',
        filter: 'all'
    }, context);
}

function showMyLockedAccountsList(context) {
    sendActionToClient({
        type: 'filter_accounts',
        filter: 'all'
    }, context);
}