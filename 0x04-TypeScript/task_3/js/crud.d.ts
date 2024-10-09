import { RowID, RowElement } from "./interface";
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowID: RowID): boolean;
export function updateRow(rowID: RowID, row: RowElement): RowElement;
