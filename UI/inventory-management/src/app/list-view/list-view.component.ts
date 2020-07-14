import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NetworkService } from '../network/network.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  airportData: any[] = [];
  aircraftData: any[] = [];

  airportDatasource = new MatTableDataSource();
  airportColumns: string[] = ['id', 'name', 'fuel_available', 'fuel_capacity',];
  @ViewChild('airportPaginator', { read: true, static: false }) airportPaginator: MatPaginator;
  @ViewChild('airportSort', { read: true, static: false }) airportSort: MatSort;

  @ViewChild('aircraftPaginator', { read: true, static: false }) aircraftPaginator: MatPaginator;
  @ViewChild('aircraftSort', { read: true, static: false }) aircraftSort: MatSort;

  @ViewChild('transactionPaginator', { read: true, static: false }) transactionPaginator: MatPaginator;
  @ViewChild('transactionSort', { read: true, static: false }) transactionSort: MatSort;

  constructor(private network: NetworkService) { }

  ngOnInit() {
    this.getAirportData();

  }

  getAirportData() {
    this.network.airportData().subscribe(res => {
      this.airportData = res['data'];
      this.airportDatasource.data = this.airportData;
      this.airportDatasource.paginator = this.airportPaginator;
      this.airportDatasource.sort = this.airportSort;
      console.log(this.airportDatasource.data);

      this.isLoadingResults = false;
    });
  }

}
