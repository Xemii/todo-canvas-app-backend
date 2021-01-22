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
            showMyAccountsList($context)
        buttons:
            "Все записи"