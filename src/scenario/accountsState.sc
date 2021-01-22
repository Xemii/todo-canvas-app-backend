theme: /

    state: СписокАккаунтов
        q!: все записи
        script:
            showMyAccountsList($context)
        buttons:
            "Заблокированные записи"
            
    state: СписокЗаблокированныхАккаунтов
        q!: заблокированные записи
        script:
            showMyLockedAccountsList($context)
        buttons:
            "Все записи"