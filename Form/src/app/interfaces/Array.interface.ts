
export interface ArrayPrecios{
    nombre:string,
    costo:number,
}
export interface formVal {
    nombreCliente:string,
    nombreDePresupuesto:string,
    web:boolean,
    Seo:boolean,
    publicidad:boolean
}

export interface objval{
    formValue:formVal,
    precio: number,
    Paginas: number,
    Idiomas: number
}

export interface PresupuestoVal{
    dato : objval
}