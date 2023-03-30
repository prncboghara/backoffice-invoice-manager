export interface IGroup {
    group_name: string,
    group_key: string
}[]

export interface ICustomerSettings {
    groups: IGroup[]
}

export interface IAccountsSettings {
    groups: IGroup[]
}

export interface ISettings {
    customer_settings: ICustomerSettings;
    accounts_settings: IAccountsSettings;
    _id: String;
}