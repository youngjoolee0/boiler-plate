const mongoose = require('mongoose');//mongoose 모듈 가져오기

const userSchema = mongoose.Schema({//mongoose모듈로 schema만들기
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,//공백제거해줌
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0//0은 사용자,1은 관리자
    },
    image:String,
    token:{//유효성 관리
        type:String
    },
    tokenExp:{//유효기간
        type:Number
    }
})

const User = mongoose.model('User',UserSchema);//mongoose 모듈로 schema 만들기
module.exports = {User}//model로 감싸주기