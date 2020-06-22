export interface IProducto {
    "id": number,
    "nombreProd": string,
    "descProd": string,
    "cateProd": string,
    "precioProd": number,
    "key": string,
    "propietario": string,
    "vendido":boolean
}

export interface IInmobiliaria extends IProducto{
    "metrosCuadrados": number,
    "numBanyos": number,
    "numHabitaciones": number,
    "localidad": string,
    "vendido":boolean
}

export interface IMotor extends IProducto{
    "tipoVehiculo": string,
    "kilometrosVehiculo": number,
    "anyoVehiculo": number,
    "vendido":boolean
}

export interface ITecnologia extends IProducto{
    "estadoProducto": string,
    "vendido":boolean
}

export interface IUsuario {
  "id": number,
  "nombreUsuario": string,
  "correo": string,
  "vendido":boolean
}
