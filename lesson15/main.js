// let age = prompt ("Та насаа оруулна уу")
// if (age >16) { 
//     alert ("yes noodle")
// } else {
//      alert ("no")
// }
// alert ('hi'+ number)


let newPassword = prompt ("Та шинэ нууц үгээ оруулна уу")
console.log(newPassword);
if (newPassword == '') {
    alert ("Нууц үг хоосон байна")    
} else {
    let newPasswordDavt = prompt ("Шинэ нууц үгээ давтан оруулна уу")
    if (newPasswordDavt == newPassword) {
        alert ("Нууц үг тохирлоо буюу АМЖИЛТТАЙ")
    } else {
        alert ("Давтан оруулсан нууц үг тохирсонгүй буюу АМЖИЛТГҮЙ")
    }
}
