import { ToPDFStrategy } from "../to-pdfstrategy";

// concrete strategy #1
export class TxtToPDFStrategy extends ToPDFStrategy {

    convert(stuffToConvert: string): Promise<any>{
        return new Promise((res, rej) => {
            console.log(`converting ${stuffToConvert} from TXT to PDF`)
            setTimeout(() => {
                res(null)
            }, 2500)
        })
    }

}
