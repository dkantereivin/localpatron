export interface Vendor {
    vid: string;
    vtype: 'CM';
    name: string;
    uname: string;
    foodType: string;
    price: number;
    phone: number;
    place: {
        address: {
            coordinates: {lat: string, lng: string};
            addr: string;
        }
    };
    externals: {
        web?: string;
        card?: string;
    } & any;
    delivery: string | boolean;
    description: string;
}

export const DEFAULT_VENDOR: Vendor = {
    vid: 'none',
    vtype: 'CM',
    name: 'default',
    uname: '_default',
    foodType: 'none',
    price: 0,
    phone: 0,
    place: {
        address: {
            coordinates: {lat: '0', lng: '0'},
            addr: 'No Address'
        }
    },
    externals: {
        ye: null,
        web: null
    },
    delivery: false,
    description: ''
};

export type VendorContainerState = {
    position: number;
    vendors: Vendor[];
}

export type VendorListProps = {
    position: number;
    width: number | string;
    height: number | string;
    vendors: Vendor[];
}

export type VendorDetailsState = {
    vendor: Vendor;
};

export var GET_VENDORS_URL: string = 'https://142.93.159.27/vendors';
export var GET_VENDOR_URL: string = 'https://142.93.159.27/vendor/';