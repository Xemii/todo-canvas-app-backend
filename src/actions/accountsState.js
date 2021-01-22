function showMyAccountsList(context) {
    sendActionToClient({
        type: 'show_accounts'
    }, context);
}