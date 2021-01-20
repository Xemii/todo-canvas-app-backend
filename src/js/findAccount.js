function findAccountIdByNumber(number, request) {
    var accounts = getAccounts(request);
    if (accounts && accounts.length) {
        for (var ind = 0; ind < accounts.length; ind++) {
            if (accounts[ind].number == number) {
                return accounts[ind].id;
            }
        }
    }
    return null;
}
