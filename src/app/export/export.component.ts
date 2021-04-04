import { Component } from '@angular/core';
import { FileService } from './file.service';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent  {

  ischecked = false;
  marked = true;
  authentificated = true;

  hostName = new FormControl('');
  network = new FormControl('');
  entity= new FormControl('');
  site= new FormControl('');
  mail= new FormControl('');
  CurrentLicense = new FormControl(''); 

  productKeyId = 5;
  constructor(private service : FileService,private sanitizer: DomSanitizer) {
  }

  

  public download()
  {
    this.service.downloadFile(this.hostName.value,this.network.value,this.site.value,this.entity.value,this.productKeyId)
    .subscribe(this.ReceiveFile);
  }

  public  ReceiveFile(response:any):void
  {
    console.info("received");
    let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
    saveAs(blob,"test.txt");
  }

  public setradio(value:string):void
  {
    console.info(value);
    if(value=="current")
    {
      this.productKeyId = 5;
    }
    else
    {
      this.productKeyId = 0;
    }
  }
  
}
