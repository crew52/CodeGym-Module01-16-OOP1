
let vietAnh = new Mobile("viet anh");
let dung = new Mobile("dung");

console.log(vietAnh.checkIsOn());
console.log(vietAnh.tunOn());
vietAnh.composeMessage("heloo em Dung");
vietAnh.sendMessage(dung);
vietAnh.composeMessage("hi hi");
vietAnh.sendMessage(dung);
vietAnh.composeMessage("aasdas");
vietAnh.sendMessage(dung);
console.log(vietAnh);
console.log(dung);

console.log(vietAnh);
console.log(dung);

dung.viewInbox();
vietAnh.viewSend();
