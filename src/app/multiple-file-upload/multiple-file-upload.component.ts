import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-file-upload',
  templateUrl: './multiple-file-upload.component.html',
  styleUrls: ['./multiple-file-upload.component.css']
})
export class MultipleFileUploadComponent implements OnInit {

  myFiles: string[] = [];
  maxFileLength: number = 1;
  isValid: boolean = true;
  exist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any): void {
    for (var i = 0; i < event.target.files.length; i++) {
      if (this.validateFileSize(event.target.files[i].size) == false) break;
      this.myFiles.push(event.target.files[i]);
    }
  }

  clickDelete(index: number): void {
    if (confirm("Are you sure to delete this file?")) {
      this.myFiles.splice(index, 1);
    }
  }

  validateFileSize(size: number): boolean {
    return (size / 1000000 > this.maxFileLength) ? this.isValid = false : this.isValid = true;
  }
}