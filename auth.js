const token ='cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5'
module.exports.generateToken =  function generateToken(email, password) {
    if (email === 'pierre@palenca.com' && password === 'MyPwdChingon123') {
        return token;
    }
    return null;
}