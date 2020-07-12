import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  airportDatasource = new MatTableDataSource();
  @ViewChild('airportPaginator', { read: true, static: false }) airportPaginator: MatPaginator;
  @ViewChild('airportSort', { read: true, static: false }) airportSort: MatSort;

  @ViewChild('aircraftPaginator', { read: true, static: false }) aircraftPaginator: MatPaginator;
  @ViewChild('aircraftSort', { read: true, static: false }) aircraftSort: MatSort;

  @ViewChild('transactionPaginator', { read: true, static: false }) transactionPaginator: MatPaginator;
  @ViewChild('transactionSort', { read: true, static: false }) transactionSort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  getAirportData() {

    
    this.interactionTableDataSource.data = this.interactionTableData;
    this.interactionTableDataSource.paginator = this.interactionPaginator;
    this.interactionTableDataSource.sort = this.interationSort;
  }

}
