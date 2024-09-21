import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

/// <reference path="./crud.d.ts" />

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

row.age = 23;

const updatedRowID: RowID = CRUD.updateRow(newRowID, row);

CRUD.deleteRow(updatedRowID);

