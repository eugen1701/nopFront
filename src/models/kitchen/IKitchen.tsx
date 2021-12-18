
export interface IAddress {
    country: string,
    city: string,
    street: string,
    number: string
}

export interface IManager {
    userName: string,
    lastName: string,
    firstName: string,
    email: string,
    password: string,
}

export interface IKitchen {
    kitchenName: string,
    address: IAddress,
    phoneNumber: string,
    contactEmailAddress: string,
    additionalInformation: string
}