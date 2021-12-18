
export interface IAddress {
    country: string,
    city: string,
    street: string,
    number: string
}

export interface IManager {
    managerId: string,
    userName: string,
    lastName: string,
    firstName: string,
    email: string,
    password: string,
}

export interface IKitchen {
    kitchenId: string,
    kitchenName: string,
    address: IAddress,
    phoneNumber: string,
    contactEmailAddress: string,
    additionalInformation: string
}