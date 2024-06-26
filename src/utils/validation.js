export function validateLogin(values) {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid Email Format";
    } else {
        const rejectedEmails = ["example@rejected.com", "another@rejected.com"];
        if (rejectedEmails.includes(values.email)) {
            errors.email = "This Email address is Not Allowed";
        }
    }
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}

export function validateRegister(values) {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid Email Format";
    } else {
        const rejectedEmails = ["example@rejected.com", "another@rejected.com"];
        if (rejectedEmails.includes(values.email)) {
            errors.email = "This Email address is Not Allowed";
        }
    }
    if (!values.username) {
        errors.username = "Username is Required";
    }
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}

export function validateForgotPassword(values) {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid Email Format";
    } else {
        const rejectedEmails = ["example@rejected.com", "another@rejected.com"];
        if (rejectedEmails.includes(values.email)) {
            errors.email = "This Email address is Not Allowed";
        }
    }

    return errors;
}

export function validateAddBoarding(values) {
    let errors = {};

    if (!values.boardingName) {
        errors.boardingName = "Boarding Name is Required";
    }
    if (!values.boardingNo) {
        errors.boardingNo = "Boarding No is Required";
    }
    if (!values.street) {
        errors.street = "Street is Required";
    }
    if (!values.city) {
        errors.city = "City is Required";
    }
    if (!values.district) {
        errors.district = "District is Required";
    }
    if (!values.province) {
        errors.province = "Province is Required";
    }
    if (!values.roomCount) {
        errors.roomCount = "Room Count is Required";
    }
    if (!values.pricePerMonth) {
        errors.pricePerMonth = "Price Per Month is Required";
    } else if (!/^\d{0,8}(\.\d{1,4})?$/.test(values.pricePerMonth)) {
        errors.pricePerMonth = 'Price per Month is not valid';
    }
    if (!values.distance) {
        errors.distance = "Distance is Required";
    } else if (!/^\d{0,8}(\.\d{1,4})?$/.test(values.distance)) {
        errors.distance = 'Distance is not valid';
    }
    if (!values.nearestUniversity) {
        errors.nearestUniversity = "Nearest University is Required";
    }
    if (!values.advancedPayment) {
        errors.advancedPayment = "Advanced Payment is Required";
    } else if (!/^\d{0,8}(\.\d{1,4})?$/.test(values.advancedPayment)) {
        errors.advancedPayment = 'Advanced Payment is not valid';
    }
    if (!values.membersCount) {
        errors.membersCount = "Members is Required";
    }
    if (!values.boardingType) {
        errors.boardingType = "Boarding Type is Required";
    }
    if (!values.stayPreference) {
        errors.stayPreference = "Stay Preference is Required";
    }
    if (!values.facilities) {
        errors.facilities = "Facilities is Required";
    }
    return errors;
}

export function validatePersonalSettings(values) {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = "First Name is Required";
    }
    if (!values.lastName) {
        errors.lastName = "Last Name is Required";
    }
    if (!values.userName) {
        errors.userName = "User Name is Required";
    }
    if (!values.email) {
        errors.email = "Email is Required";
    } else if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is not valid';
    }
    if (!values.nicNo) {
        errors.nicNo = "NIC No is Required";
    }
    if (!values.phoneNo) {
        errors.phoneNo = 'Contact No is required';
    } else if (!/^([+]\d{2})?\d{10}$/.test(values.phoneNo)) {
        errors.phoneNo = 'Contact No is not valid';
    }
    if (!values.dob) {
        errors.dob = "Date of Birth is Required";
    }
    if (!values.homeNo) {
        errors.homeNo = "Home No is Required";
    }
    if (!values.street) {
        errors.street = "Street is Required";
    }
    if (!values.city) {
        errors.city = "City is Required";
    }
    if (!values.district) {
        errors.district = "District is Required";
    }
    if (!values.province) {
        errors.province = "Province is Required";
    }
    if (!values.postalCode) {
        errors.postalCode = "Postal Code is Required";
    }

    return errors;
}

export function validatePasswordSettings(values) {
    let errors = {}
    if (!values.currentPassword) {
        errors.currentPassword = "Current Password is Required";
    }
    if (!values.newPassword) {
        errors.newPassword = "New Password is Required";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is Required";
    }
    return errors;
}