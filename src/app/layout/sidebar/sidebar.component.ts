import { Component, OnInit } from "@angular/core";
import { UtilsService } from "../../core/services/utils.service";
import { FolderTotalInterface } from "../../core/interfaces/folder-total.interface";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  folderData: FolderTotalInterface;

  constructor(private _utils: UtilsService) {}

  ngOnInit() {
    this._utils.getTotal().subscribe(value => (this.folderData = value));
  }
}
