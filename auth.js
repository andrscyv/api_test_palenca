const token ='cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5'
module.exports.generateToken =  function generateToken(email, password) {
    // in real scenario we would get the user from db using email
    // and compare provided password with stored password, which should be hashed and salted
    if (email === 'pierre@palenca.com' && password === 'MyPwdChingon123') {
        return token;
    }
    return null;
}