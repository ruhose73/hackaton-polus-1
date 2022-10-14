module.exports = class AuthDto {
    id;
    email;
    phone;

    constructor(user) {
        this.id = user.uid;
        this.email = user.email;
        this.phone = user.phone;
    }
};