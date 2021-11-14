import { ToPDFStrategy } from "./to-pdfstrategy";

// context
export class PDFConverter {
    private strategy: ToPDFStrategy

    setStrategy(newStrategy: ToPDFStrategy): void {
        this.strategy = newStrategy
    }

    runConversion(stuffToConvert: string): Promise<any> {
        return this.strategy.convert(stuffToConvert)
    }
}
