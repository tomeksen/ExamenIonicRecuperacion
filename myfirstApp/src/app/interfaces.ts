export interface IProducto {
    "id": number,
    "nombreProd": string,
    "descProd": string,
    "cateProd": string,
    "precioProd": number,
    "key": string
}

export interface IInmobiliaria extends IProducto{
    "metrosCuadrados": number,
    "numBanyos": number,
    "numHabitaciones": number,
    "localidad": string
}

export interface IMotor extends IProducto{
    "tipoVehiculo": string,
    "kilometrosVehiculo": number,
    "anyoVehiculo": number
}

export interface ITecnologia extends IProducto{
    "estadoProducto": string
}