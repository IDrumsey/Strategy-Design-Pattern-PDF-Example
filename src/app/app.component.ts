import { Component } from '@angular/core';
import { PDFConverter } from './core/classes/pdfconverter';
import { PDFConversionStrategies } from './core/classes/singletons/pdfconversion-strategies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  converter = new PDFConverter()
  
  fromValue: string

  // ------------------------------ EVENT HANDLERS ------------------------------

  onConvertBtnClick(): void {
    switch(this.fromValue){
      case "txt": {
        this.converter.setStrategy(PDFConversionStrategies.getInstance().txt)
        break;
      }
      case "jpeg": {
        this.converter.setStrategy(PDFConversionStrategies.getInstance().jpeg)
        break;
      }
      case "doc": {
        this.converter.setStrategy(PDFConversionStrategies.getInstance().doc)
        break;
      }
    }

    this.converter.runConversion("Some random data").then(() => {
      console.log("done")
    })
  }

}
