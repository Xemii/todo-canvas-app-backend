# Когда приходит ServerAction, сообщение прилетает в состояние, 
# с условием на вход action_id.
# пример:
#     event!: action_id

theme: /
    
    state: АккаунтРазблокирован
        event!: done
        event!: DONE

        random: 
            a: Разблокировано!

        buttons:
            "Разблокируй все" 