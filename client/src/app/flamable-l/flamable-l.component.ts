import { Component, OnInit } from '@angular/core';
import { StorageFl } from '../storage';
import { StorageFl1 } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-flamable-l',
  templateUrl: './flamable-l.component.html',
  styleUrls: ['./flamable-l.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class FlamableLComponent implements OnInit {

      selectedDataFl: StorageFl;
      selectedDataFl1: StorageFl1;

      datasFl: StorageFl[];
      datasFl1: StorageFl1[];

      constructor(private storageService: StorageService) { }



      ngOnInit() {
        this.getDataFl();
        this.getDataFl1();


      }



      onSelectFl(data: StorageFl): void {
        this.selectedDataFl = data;
      }
      onSelectFl1(data1: StorageFl1): void {
        this.selectedDataFl1 = data1;
      }

      getDataFl(): void {
      this.storageService.getDataFl()
          .subscribe(datasFl => this.datasFl = datasFl);
    }

    getDataFl1(): void {
    this.storageService.getDataFl1()
        .subscribe(datasFl1 => this.datasFl1 = datasFl1);
    }


    deleteRow(id){
            for(let i = 0; i < this.datasFl.length; ++i){
                if (this.datasFl[i].id === id) {
                    this.datasFl.splice(i,1);
                }
            }
        }
        deleteRow1(id){
                for(let i = 0; i < this.datasFl1.length; ++i){
                    if (this.datasFl1[i].id === id) {
                        this.datasFl1.splice(i,1);
                    }
                }
            }

}
