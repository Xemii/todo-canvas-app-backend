function unlockAccount(account, context) {
    addAction({
        type: JSON.stringify(context),
        account: account
    })
}
