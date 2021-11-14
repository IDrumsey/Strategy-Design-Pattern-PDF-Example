import { DocToPDFStrategy } from "../strategies/doc-to-pdfstrategy"
import { JpegToPDFStrategy } from "../strategies/jpeg-to-pdfstrategy"
import { TxtToPDFStrategy } from "../strategies/txt-to-pdfstrategy"

// https://refactoring.guru/design-patterns/singleton/typescript/example

export class PDFConversionStrategies {
    
    private static instance: PDFConversionStrategies

    private constructor(){}

    static getInstance(): PDFConversionStrategies {
        if(!this.instance){
            this.instance = new PDFConversionStrategies()
        }

        return this.instance
    }

    // available strategies
    txt = new TxtToPDFStrategy()
    jpeg = new JpegToPDFStrategy()
    doc = new DocToPDFStrategy()
}
