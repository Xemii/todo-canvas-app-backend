function sendActionToClient(action, context) {
    var command = {
        type: "smart_app_data",
        action: action
    };
    for (var index = 0; context.response.replies && index < context.response.replies.length; index ++) {
        if (context.response.replies[index].type === "raw" &&
            context.response.replies[index].body &&
            context.response.replies[index].body.items
        ) {
            context.response.replies[index].body.items.push({command: command});
            return;
        }
    }
    
    return reply({items: [{command: command}]}, context.response);
}