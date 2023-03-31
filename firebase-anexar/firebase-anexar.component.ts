import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-firebase-anexar',
  templateUrl: './firebase-anexar.component.html',
  styleUrls: ['./firebase-anexar.component.css']
})
export class FirebaseAnexarComponent {

  selectedImage = File;
  imageURL!: string | ArrayBuffer;

  constructor(private storage: AngularFireStorage) { }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      const filePath = `images/${this.selectedImage}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, this.selectedImage);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url: any) => {
            this.imageURL = url;
          });
        })
      ).subscribe();
    }
  }
}
