const token ='cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5'
const profiles = {
    [token]: {
        "country": "mx",
        "city_name": "Ciudad de Mexico",
        "worker_id": "34dc0c89b16fd170eba320ab186d08ed",
        "first_name": "Pierre",
        "last_name": "Delarroqua",
        "email": "pierre@palenca.com",
        "phone_prefix": "+52",
        "phone_number": "5576955981",
        "rating": "4.8",
        "lifetime_trips": 1254,
    }
}
// in real scenario we would decode jwt token to get userId and get 
// data from db
module.exports.getProfile = function(accessToken) {
    return profiles[accessToken];
}