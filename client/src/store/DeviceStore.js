import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'IPhone 12 pro', price: 100000, rating: 5, img: 'https://iphonemania.su/wp-content/uploads/2021/01/iphone-12-blue-select-2020-2.png'},
            {id: 2, name: 'IPhone 12 pro', price: 100000, rating: 5, img: 'https://iphonemania.su/wp-content/uploads/2021/01/iphone-12-blue-select-2020-2.png'},
            {id: 3, name: 'IPhone 12 pro', price: 100000, rating: 5, img: 'https://iphonemania.su/wp-content/uploads/2021/01/iphone-12-blue-select-2020-2.png'},
            {id: 4, name: 'IPhone 12 pro', price: 100000, rating: 5, img: 'https://iphonemania.su/wp-content/uploads/2021/01/iphone-12-blue-select-2020-2.png'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }
}