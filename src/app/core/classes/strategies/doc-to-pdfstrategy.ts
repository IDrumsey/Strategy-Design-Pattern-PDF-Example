import { ToPDFStrategy } from "../to-pdfstrategy"

// concrete strategy #3
export class DocToPDFStrategy extends ToPDFStrategy {

    convert(stuffToConvert: string): Promise<any>{
        return new Promise((res, rej) => {
            console.log("gotta do some prep work...")
            console.log(`converting ${stuffToConvert} from DOC to PDF`)
            setTimeout(() => {
                res(null)
            }, 2500)
        })
    }
    
}
