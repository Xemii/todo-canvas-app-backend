theme: /


    state: РазблокировкаАккаунтаПоНомеру
        q!: (~разблокировать|разблокируй) номер
            @duckling.number:: digit
            $weight<1.001>
        
        script:
            var accountId = findAccountIdByNumber(
                $parseTree._digit,
                getRequest($context)
            )
            unlockAccount(itemId, $context);

        go!: /АккаунтРазблокирован