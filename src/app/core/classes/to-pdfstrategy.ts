// abstract strategy class
export abstract class ToPDFStrategy {

    abstract convert(stuffToConvert: string): Promise<any>

}
