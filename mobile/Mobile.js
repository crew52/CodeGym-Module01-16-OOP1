class Mobile {
    name;
    battery;
    isOn;
    draftMessage;
    inbox;
    sentMessages;

    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.isOn = false;
        this.draftMessage = "";
        this.inbox = [];
        this.sentMessages = [];
    }

    // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
    checkIsOn(){
        this.batteryReduction();
        return this.isOn;

    }

    // Có chức năng bật và tắt điện thoại.
    tunOn() {
        this.batteryReduction();
        return this.isOn = true;
    }

    tunOff() {
        this.batteryReduction();
        return this.isOn = false;
    }

    // Có chức năng xạc pin điện thoại.
    setBattery(){
        if (!this.isOn){
            console.log("Chua bat dien thoai");
            return;
        }
        return this.battery = 100;
    }

    // Có chức năng soạn tin nhắn.
    composeMessage(newMessage){
        if (!this.isOn){
            console.log("Chua bat dien thoai");
            return;
        }
        this.batteryReduction();
        return this.draftMessage = newMessage;
    }

    // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
    sendMessage(newMobile){
        if (!this.isOn){
            console.log("Chua bat dien thoai");
            return;
        }
        this.batteryReduction();
        newMobile.inbox.push(this.draftMessage);
        this.sentMessages.push(this.draftMessage);
        this.draftMessage = "";
    }

    // Có chức năng xem tin trong hộp thư đến.
    viewInbox(){
        if (!this.isOn){
            console.log("Chua bat dien thoai");
            return;
        }
        for (const inboxKey in this.inbox) {
            console.log(this.inbox[inboxKey]);
        }
        this.batteryReduction();
    }

    // Có chức năng xem tin đã gửi.
    viewSend(){
        if (!this.isOn){
            console.log("Chua bat dien thoai");
            return;
        }
        for (const sendKey in this.sentMessages) {
            console.log(this.sentMessages[sendKey]);
        }
        this.batteryReduction();
    }

    // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
    batteryReduction(){
        this.battery--;
        if (this.battery === 0){
            console.log("dien thoai het pin");
        }
    }

}