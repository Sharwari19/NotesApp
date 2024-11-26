import validator from 'validator';


// has some gaps - donest validate something like user+lavel@example.com & doesnt check if domain name is valid 
// export const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email)
// }

// re-write using validator.js library

export const validateEmail = (email) => {
    return validator.isEmail(email);
};

// checks if it is a valid email address

export const validatePassword = (password) => {

    const isStrong = validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    });

    return isStrong;
};

export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(" ");
    let initials = "";

    for(let i = 0; i < Math.min(words.length, 2); i++) {

        initials = initials + words[i][0];
    }

    return initials.toUpperCase();
}