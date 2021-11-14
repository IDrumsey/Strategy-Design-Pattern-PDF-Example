import { ToPDFStrategy } from "../to-pdfstrategy"

// concrete strategy #2
export class JpegToPDFStrategy extends ToPDFStrategy {

    convert(stuffToConvert: string): Promise<any>{
        return new Promise((res, rej) => {
            console.log(`converting ${stuffToConvert} from JPEG to PDF`)
            setTimeout(() => {
                res(null)
            }, 2500)
        })
    }
    
}
