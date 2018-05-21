(function(ext) {
    var received_message = '';
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.receive = function(world_name, room_name) {
        // Code that gets executed when the block is run
        return received_message;
        //alert('受信メッセージ');
        if (Math.random < 0.01) {
            // 問い合わせ
            console.log(received_message);
            
            return true;
        }

        //return false;
    };
    
    ext.received_message = function() {

        return received_message;
    }
    
    ext.send = function(send_message, world_name, room_name) {
        alert(send_message);
        received_message = send_message + 'ですって!?';
        //this.receive();
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', '%s を %s の %s に送信', 'send', 'メッセージ', 'ワールド名', 'ルーム名'],
            ['r', '%s の %s の最新のメッセージを受信', 'receive', 'ワールド名', 'ルーム名'],
//            ['h', 'メッセージを受信', 'receive'],
            ['r', '受信したメッセージ', 'received_message'],

        ]
    };

    // Register the extension
    ScratchExtensions.register('チャットアプリ', descriptor, ext);
})({});
